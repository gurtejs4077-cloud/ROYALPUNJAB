const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');

const replacements = {
  '📞 1800-PUNJAB': '1800-PUNJAB',
  '🎉 Book for Wedding/Events': 'Book for Wedding/Events',
  '<span class="input-icon">✈️</span>': '<span class="input-icon"><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></span>',
  '🚗<span>': '<span>',
  '🚙<span>': '<span>',
  '🏎️<span>': '<span>',
  '<span class="input-icon">👤</span>': '<span class="input-icon"><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></span>',
  '<span class="input-icon">📱</span>': '<span class="input-icon"><svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></span>',
  '<div class="service-icon-wrap orange">🏙️</div>': '<div class="service-icon-wrap orange"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>',
  '<div class="service-icon-wrap gold">🛣️</div>': '<div class="service-icon-wrap gold"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div>',
  '<div class="service-icon-wrap blue">✈️</div>': '<div class="service-icon-wrap blue"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>',
  '<div class="service-icon-wrap green">🕌</div>': '<div class="service-icon-wrap green"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></div>',
  '<div class="service-icon-wrap purple">🎉</div>': '<div class="service-icon-wrap purple"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>',
  '<div class="service-icon-wrap teal">⏰</div>': '<div class="service-icon-wrap teal"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>',
  '<span>👤 4 Seats</span>': '<span>4 Seats</span>',
  '<span>👤 6 Seats</span>': '<span>6 Seats</span>',
  '<span>❄️ AC</span>': '<span>AC</span>',
  '<span>🎒 2 Bags</span>': '<span>2 Bags</span>',
  '<span>🎒 3 Bags</span>': '<span>3 Bags</span>',
  '<div class="step-icon">📝</div>': '<div class="step-icon">01</div>',
  '<div class="step-icon">✅</div>': '<div class="step-icon">02</div>',
  '<div class="step-icon">🚖</div>': '<div class="step-icon">03</div>',
  '🚖 Book a Ride Now': 'Book a Ride Now',
  '<span class="logo-icon">🚖</span>': '',
  '<span class="ci-icon">📞</span>': '',
  '<span class="ci-icon">💬</span>': '',
  '<span class="ci-icon">📧</span>': '',
  '<span class="ci-icon">🏢</span>': ''
};

for (const [key, value] of Object.entries(replacements)) {
  indexHtml = indexHtml.replace(new RegExp(key.replace(/[.*+?^$\/{}()|[\\]\\\\]/g, '\\\\$&'), 'g'), value);
}

fs.writeFileSync('index.html', indexHtml);
console.log('Cleaned index.html');
