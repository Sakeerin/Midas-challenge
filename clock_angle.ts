function getClockAngle(hh_mm: string): number {
  const [hourStr, minuteStr] = hh_mm.split(":");
  const hour = parseInt(hourStr);
  const minutes = parseInt(minuteStr);
  const Dh = (hour*360) / 12 + (minutes*360) / (12*60); // Degree(hour)
  const Dm = (minutes * 360) / 60;  // Degree(minutes)

  const angle = Math.abs(Dh - Dm);      
  return Math.min(angle, 360 - angle); 
}

// Test cases
console.log(getClockAngle("09:00")); 
console.log(getClockAngle("17:30")); 