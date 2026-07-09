// =========================================
//   Royal Punjab Ride — app.js
//   Interactive Logic & Booking
// =========================================

/* ===== STATE ===== */
const state = {
  tripType: 'oneway',
  selectedCab: 'seater5',
  rates: { seater5: 15, seater7: 29, luxury: 'contact' },
};

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  // Sticky CTA: show after hero
  const stickyCta = document.getElementById('stickyCta');
  stickyCta.style.display = window.scrollY > window.innerHeight * 0.8 ? 'block' : 'none';

  // Active nav link highlight
  const sections = ['home', 'booking', 'services', 'fleet', 'about', 'contact'];
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* ===== HAMBURGER MENU ===== */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  links.classList.toggle('open');
}
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

/* ===== SCROLL TO BOOKING ===== */
function scrollToBooking() {
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ===== TRIP TYPE TABS ===== */
function setTripType(type) {
  state.tripType = type;

  // Deactivate all tabs
  document.querySelectorAll('.trip-tab').forEach(t => t.classList.remove('active'));
  
  const activeTab = document.getElementById(`tab-${type}`);
  if (activeTab) activeTab.classList.add('active');

  // Show/hide return date
  const returnRow = document.getElementById('returnDateRow');
  if (returnRow) returnRow.style.display = type === 'roundtrip' ? 'grid' : 'none';

  // Show/hide Airport UI
  const airportUI = document.getElementById('airportUI');
  const pickupContainer = document.getElementById('pickupContainer');
  const dropoffContainer = document.getElementById('dropoffContainer');
  const pickupInput = document.getElementById('pickup');
  const dropoffInput = document.getElementById('dropoff');

  if (airportUI) {
    if (type === 'airport') {
      airportUI.style.display = 'block';
      toggleAirportDir(); // Initialize the visibility and required logic
    } else {
      airportUI.style.display = 'none';
      pickupContainer.style.display = 'block';
      dropoffContainer.style.display = 'block';
      pickupInput.required = true;
      dropoffInput.required = true;
    }
  }

  // Show/hide hours (if applicable in the future)
  const hoursGroup = document.getElementById('hoursGroup');
  if (hoursGroup) hoursGroup.style.display = type === 'airport' ? 'none' : 'none';

  updateFareEstimate();
}

/* ===== AIRPORT DIRECTION LOGIC ===== */
function toggleAirportDir() {
  const dirRadio = document.querySelector('input[name="airportDir"]:checked');
  if (!dirRadio) return;
  const dir = dirRadio.value;
  
  const pickupContainer = document.getElementById('pickupContainer');
  const dropoffContainer = document.getElementById('dropoffContainer');
  const pickupInput = document.getElementById('pickup');
  const dropoffInput = document.getElementById('dropoff');
  const airportSelect = document.getElementById('airportSelect');

  if (dir === 'to') {
    pickupContainer.style.display = 'block';
    dropoffContainer.style.display = 'none';
    
    pickupInput.required = true;
    dropoffInput.required = false; // Prevent form validation error on hidden field
    dropoffInput.value = airportSelect.value;

    // Clear pickup field if it was previously set to an airport
    const isPickupAirport = Array.from(airportSelect.options).some(opt => opt.value === pickupInput.value);
    if (isPickupAirport) pickupInput.value = '';

  } else {
    pickupContainer.style.display = 'none';
    dropoffContainer.style.display = 'block';
    
    pickupInput.required = false; // Prevent form validation error on hidden field
    dropoffInput.required = true;
    pickupInput.value = airportSelect.value;

    // Clear dropoff field if it was previously set to an airport
    const isDropoffAirport = Array.from(airportSelect.options).some(opt => opt.value === dropoffInput.value);
    if (isDropoffAirport) dropoffInput.value = '';
  }
  
  updateFareEstimate();
}

/* ===== CAB SELECTION ===== */
function selectCab(cabType) {
  state.selectedCab = cabType;

  document.querySelectorAll('.glass-vehicles button').forEach(card => card.classList.remove('active'));
  document.getElementById(`cab-${cabType}`).classList.add('active');

  updateFareEstimate();
  showToast(`🚖 ${cabType.charAt(0).toUpperCase() + cabType.slice(1)} selected!`);
}

function selectCabAndScroll(cabType) {
  selectCab(cabType);
  setTimeout(() => scrollToBooking(), 100);
}

/* ===== POPULAR ROUTES ===== */
function setRoute(pickup, dropoff) {
  document.getElementById('pickup').value = pickup;
  document.getElementById('dropoff').value = dropoff;
  updateFareEstimate();
  showToast(`📍 Route set: ${pickup} → ${dropoff}`);
}

/* ===== GEOLOCATION ===== */
function useMyLocation() {
  if (!navigator.geolocation) {
    showToast('❌ Geolocation not supported by your browser', 'error');
    return;
  }
  showToast('🎯 Getting your location...');
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      // Reverse geocode using nominatim
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await res.json();
        const city = data.address.city || data.address.town || data.address.state_district || 'Your Location';
        document.getElementById('pickup').value = city;
        showToast(`📍 Location detected: ${city}`);
      } catch {
        document.getElementById('pickup').value = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
        showToast('📍 Location detected!');
      }
      updateFareEstimate();
    },
    () => showToast('❌ Could not access location. Please enable GPS.', 'error')
  );
}

/* ===== FARE ESTIMATE ===== */
// Approximate distances between major Punjab cities (km)
const cityDistances = {
  'amritsar-chandigarh': 230, 'chandigarh-amritsar': 230,
  'amritsar-ludhiana': 135, 'ludhiana-amritsar': 135,
  'amritsar-jalandhar': 79, 'jalandhar-amritsar': 79,
  'amritsar-delhi': 460, 'delhi-amritsar': 460,
  'ludhiana-chandigarh': 100, 'chandigarh-ludhiana': 100,
  'jalandhar-delhi': 380, 'delhi-jalandhar': 380,
  'chandigarh-delhi': 250, 'delhi-chandigarh': 250,
  'amritsar-patiala': 220, 'patiala-amritsar': 220,
  'ludhiana-delhi': 300, 'delhi-ludhiana': 300,
};

function getApproxDistance(from, to) {
  const key = `${from.toLowerCase().trim()}-${to.toLowerCase().trim()}`;
  return cityDistances[key] || null;
}

function updateFareEstimate() {
  const from = document.getElementById('pickup').value.split(',')[0].trim();
  const to = document.getElementById('dropoff').value.split(',')[0].trim();
  const fareEl = document.getElementById('fareEstimate');
  const fareAmt = document.getElementById('fareAmount');
  const fareDetails = document.getElementById('fareDetails');

  if (!from || !to) { fareEl.style.display = 'none'; return; }

  const dist = getApproxDistance(from, to);
  if (!dist) { fareEl.style.display = 'none'; return; }

  const rate = state.rates[state.selectedCab];
  
  if (state.selectedCab === 'luxury') {
    fareEl.style.display = 'block';
    fareAmt.textContent = `Contact Us`;
    fareDetails.textContent = `For luxury pricing, please call or WhatsApp.`;
    return;
  }

  let baseFare = dist * rate;
  if (state.tripType === 'roundtrip') baseFare *= 2;
  if (state.tripType === 'rental') {
    const hrs = parseInt(document.getElementById('hours').value) || 4;
    baseFare = hrs * rate * 15; // ~15 km/hr city driving
  }

  const toll = dist > 150 ? 150 : 0;
  const allowance = baseFare > 2000 ? 200 : 0;
  const total = baseFare + toll + allowance;

  fareEl.style.display = 'block';
  fareAmt.textContent = `₹${total.toLocaleString('en-IN')}`;
  fareDetails.textContent = `${dist} km × ₹${rate}/km${toll ? ` + ₹${toll} toll` : ''}${allowance ? ` + ₹${allowance} driver allowance` : ''}`;
}

// Live fare update on input change
document.getElementById('pickup').addEventListener('input', updateFareEstimate);
document.getElementById('dropoff').addEventListener('input', updateFareEstimate);
const hoursEl = document.getElementById('hours');
if (hoursEl) hoursEl.addEventListener('change', updateFareEstimate);

/* ===== SET DEFAULT DATE & TIME ===== */
function setDefaultDateTime() {
  const now = new Date();
  now.setHours(now.getHours() + 1, 0, 0, 0);
  const dateEl = document.getElementById('date');
  const timeEl = document.getElementById('time');
  dateEl.value = now.toISOString().split('T')[0];
  timeEl.value = `${String(now.getHours()).padStart(2, '0')}:00`;
  dateEl.min = new Date().toISOString().split('T')[0];
}
setDefaultDateTime();

/* ===== FORM VALIDATION & SUBMISSION ===== */
async function submitBooking(e) {
  e.preventDefault();

  const pickup = document.getElementById('pickup').value.trim();
  const dropoff = document.getElementById('dropoff').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const fareAmt = document.getElementById('fareAmount').textContent || 'Not estimated';

  // Basic validation
  if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    showToast('❌ Please enter a valid 10-digit mobile number', 'error');
    document.getElementById('phone').focus();
    return;
  }

  const btn = document.getElementById('submitBtn');
  const originalBtnHTML = btn.innerHTML;
  btn.innerHTML = 'Processing... ⏳';
  btn.disabled = true;

  const cabNames = { seater5: '5 Seater', seater7: '7 Seater', luxury: 'Luxury Car' };
  const bookingId = 'PR' + Math.random().toString(36).substr(2, 8).toUpperCase();

  // Create booking data object
  const bookingData = {
    bookingId,
    passengerName: name,
    passengerPhone: phone,
    pickupLocation: pickup,
    dropLocation: dropoff,
    bookingDate: date,
    bookingTime: time,
    cabType: cabNames[state.selectedCab],
    tripType: state.tripType,
    estimatedFare: fareAmt,
    status: 'Pending'
  };

  // Attempt to save to Firebase
  let isSaved = false;
  let errorMsg = '';
  if (typeof window.saveBookingToFirebase === 'function') {
    const result = await window.saveBookingToFirebase(bookingData);
    isSaved = result.success;
    errorMsg = result.error;
  } else {
    console.warn("Firebase not initialized yet. Proceeding with mockup.");
    await new Promise(r => setTimeout(r, 1500)); // Simulate delay
    isSaved = true;
  }

  if (!isSaved) {
    if (errorMsg && errorMsg.toLowerCase().includes("permission")) {
      showToast('❌ Firestore Rules are blocking the save! Make sure it is in Test Mode.', 'error');
    } else {
      showToast(`❌ Error: ${errorMsg || 'Database connection failed'}`, 'error');
    }
    btn.innerHTML = originalBtnHTML;
    btn.disabled = false;
    return;
  }

  // --- WhatsApp Background API (Local BuilderBot) ---
  function sendBackgroundWhatsApp(data) {
    // 1. Admin Number (Receives booking details)
    const adminPhone = "918427850271"; 
    
    // 2. Customer Number (Receives welcome/confirmation)
    // Assuming Indian numbers (10 digits). Prepend '91' for WhatsApp.
    let customerPhone = data.passengerPhone;
    if (customerPhone.length === 10) {
      customerPhone = "91" + customerPhone;
    }

    // Messages
    const adminMsg = `🚨 *NEW TAXI BOOKING* 🚨\n\n🆔 ID: ${data.bookingId}\n👤 Name: ${data.passengerName}\n📞 Phone: ${data.passengerPhone}\n📍 Pick: ${data.pickupLocation}\n🏁 Drop: ${data.dropLocation}\n📅 Date: ${data.bookingDate} at ${data.bookingTime}\n🚖 Cab: ${data.cabType}\n💰 Fare: ${data.estimatedFare}`;
    
    const customerMsg = `Hello ${data.passengerName}! 👋\n\nThank you for booking with Royal Punjab Ride! Your cab (${data.cabType}) is confirmed for ${data.bookingDate} at ${data.bookingTime}.\n\n📍 From: ${data.pickupLocation}\n🏁 To: ${data.dropLocation}\n\nOur driver will contact you shortly! 🚖`;

    // Helper function to send message via local bot
    const sendMessage = (number, text) => {
      fetch('/api/bot/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: number, message: text })
      }).catch(err => console.error("WhatsApp Error:", err));
    };

    // Send both messages
    sendMessage(adminPhone, adminMsg);
    sendMessage(customerPhone, customerMsg);
  }

  // Success UI Update
  document.getElementById('modalMessage').textContent =
    `Your cab has been booked! A driver will contact you on +91 ${phone} within 5 minutes.`;

  document.getElementById('modalDetails').innerHTML = `
    <div>🆔 Booking ID: <span>${bookingId}</span></div>
    <div>👤 Passenger: <span>${name}</span></div>
    <div>📍 From: <span>${pickup}</span></div>
    <div>🏁 To: <span>${dropoff}</span></div>
    <div>📅 Date: <span>${new Date(date + 'T' + time).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</span></div>
    <div>🚖 Cab: <span>${cabNames[state.selectedCab]}</span></div>
    <div>💬 Status: <span style="color: var(--green-punjab); font-weight:700;">✅ Confirmed</span></div>
  `;

  document.getElementById('modalOverlay').classList.add('active');

  btn.innerHTML = originalBtnHTML;
  btn.disabled = false;

  // Send background WhatsApp notification silently
  sendBackgroundWhatsApp(bookingData);

  // Reset form
  document.getElementById('bookingForm').reset();
  setDefaultDateTime();
  document.querySelectorAll('.glass-vehicles button').forEach(c => c.classList.remove('active'));
  document.getElementById('cab-seater5').classList.add('active');
  state.selectedCab = 'seater5';
  document.getElementById('fareEstimate').style.display = 'none';
}

/* ===== MODAL ===== */
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}
// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ===== TOAST NOTIFICATION ===== */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 90px; left: 50%; transform: translateX(-50%);
    background: ${type === 'error' ? '#EF4444' : '#1E1E3E'};
    color: white; padding: 12px 24px;
    border-radius: 100px; font-size: 0.9rem; font-weight: 600;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    z-index: 3000; white-space: nowrap;
    animation: slideUp 0.3s ease;
    border: 1px solid ${type === 'error' ? 'rgba(239,68,68,0.3)' : 'rgba(255,140,0,0.3)'};
  `;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(-50%) translateY(8px)'; toast.style.transition = 'all 0.3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

/* ===== ADVANCED SCROLL-IN ANIMATIONS ===== */
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  let delay = 0;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('reveal-active');
      }, delay);
      delay += 150; // 150ms stagger between elements appearing together
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function initAnimations() {
  const animatables = document.querySelectorAll(
    '.service-card, .fleet-card, .testimonial-card, .step-card, .city-tag, .section-header, .step-arrow'
  );

  animatables.forEach((el) => {
    // Add the base reveal class
    el.classList.add('reveal-item');
    // Remove any inline transition delay just in case
    el.style.transitionDelay = '';

    // Observe the element
    observer.observe(el);
  });
}

function initAll() {
  initAnimations();
  initTiltEffect();
  if (typeof updateFareEstimate === 'function') updateFareEstimate();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* ===== LOAD ANIMATIONS ===== */
function loadAll() {
  document.body.classList.remove('is-loading');
}
if (document.readyState === 'complete') {
  loadAll();
} else {
  window.addEventListener('load', loadAll);
}

/* ===== 3D TILT EFFECT ===== */
function initTiltEffect() {
  const tiltElements = document.querySelectorAll('.fleet-card, .service-card, .step-card, .testimonial-card');

  tiltElements.forEach(el => {
    // Enable 3D transform on the element
    el.style.transformStyle = 'preserve-3d';

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation based on cursor position
      const rotateX = ((y - centerY) / centerY) * -12; // max 12 deg tilt
      const rotateY = ((x - centerX) / centerX) * 12;

      // We keep translateY(0) to not override the reveal animation
      // scale(1.05) creates a nice pop effect
      el.style.transform = `perspective(1000px) translateY(0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      el.style.transition = 'transform 0.1s ease';
      el.style.zIndex = '10';
    });

    el.addEventListener('mouseleave', () => {
      // Reset back to standard state
      el.style.transform = `perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.transition = 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
      el.style.zIndex = '1';
    });
  });
}

/* ===== REAL-TIME LOCATION AUTOCOMPLETE ===== */
function initAutocomplete() {
  const pickupInput = document.getElementById('pickup');
  const dropoffInput = document.getElementById('dropoff');
  const pickupSuggestions = document.getElementById('pickup-suggestions');
  const dropoffSuggestions = document.getElementById('dropoff-suggestions');

  if (!pickupInput || !dropoffInput || !pickupSuggestions || !dropoffSuggestions) return;

  let debounceTimer;

  function fetchLocations(query, dropdown, inputField) {
    // Clear timeout if user is typing
    clearTimeout(debounceTimer);

    if (query.length < 3) {
      dropdown.innerHTML = '';
      dropdown.classList.remove('active');
      return;
    }

    // Show loading
    dropdown.innerHTML = '<li class="loading-msg">Searching places in India...</li>';
    dropdown.classList.add('active');

    debounceTimer = setTimeout(async () => {
      try {
        // We use Photon (Komoot) API based on OpenStreetMap for incredibly deep data (villages, cities, streets)
        // It's completely free, requires no API key, and supports fuzzy searching.
        // We use bbox to restrict results roughly to India, and filter specifically for cities, towns, and villages.
        const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&osm_tag=place:city&osm_tag=place:town&osm_tag=place:village&bbox=68.1,6.5,97.4,35.5&limit=8`);
        const data = await res.json();

        dropdown.innerHTML = '';

        if (!data.features || data.features.length === 0) {
          dropdown.innerHTML = '<li class="error-msg">No locations found.</li>';
          return;
        }

        data.features.forEach(feature => {
          const place = feature.properties;
          // Filter to only show India results (optional, but helps if users type generic names)
          if (place.countrycode && place.countrycode !== 'IN') return;

          const li = document.createElement('li');

          // Format the display name dynamically based on what data is available
          const namePart = place.name;
          let regionParts = [];
          if (place.county && place.county !== namePart) regionParts.push(place.county); // District/County
          if (place.state && place.state !== namePart) regionParts.push(place.state);    // State
          
          const regionString = regionParts.join(', ');
          
          // Icon based on type (village, city, etc)
          const icon = (place.osm_value === 'village' || place.osm_value === 'town') ? '🏡' : '📍';

          li.innerHTML = `
            <span class="loc-icon">${icon}</span>
            <div class="loc-details">
              <span class="loc-name">${namePart}</span>
              <span class="loc-region">${regionString || place.country || 'India'}</span>
            </div>
          `;

          li.addEventListener('click', () => {
            inputField.value = `${namePart}${regionString ? ', ' + regionString : ''}`;
            dropdown.innerHTML = '';
            dropdown.classList.remove('active');

            // Trigger estimate update if it's the dropoff or pickup changing
            updateFareEstimate();
          });

          dropdown.appendChild(li);
        });

      } catch (err) {
        console.error("Location search failed:", err);
        dropdown.innerHTML = '<li class="error-msg">Search failed.</li>';
      }
    }, 400); // 400ms debounce
  }

  // Event Listeners
  pickupInput.addEventListener('input', (e) => fetchLocations(e.target.value, pickupSuggestions, pickupInput));
  dropoffInput.addEventListener('input', (e) => fetchLocations(e.target.value, dropoffSuggestions, dropoffInput));

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!pickupInput.contains(e.target) && !pickupSuggestions.contains(e.target)) {
      pickupSuggestions.classList.remove('active');
    }
    if (!dropoffInput.contains(e.target) && !dropoffSuggestions.contains(e.target)) {
      dropoffSuggestions.classList.remove('active');
    }
  });
}

// Initialize autocomplete when DOM is ready or if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAutocomplete);
} else {
  initAutocomplete();
}
