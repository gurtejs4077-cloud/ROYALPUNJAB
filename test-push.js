async function testPush() {
  const res = await fetch('http://localhost:3000/api/notify-admin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ passengerName: 'Test', pickupLocation: 'A', dropLocation: 'B' })
  });
  
  const data = await res.json();
  console.log('Status:', res.status);
  console.log('Data:', data);
}

testPush();
