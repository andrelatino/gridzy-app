// Enable mobile device emulation
function enableMobileEmulation() {
  const userAgent = 'Mozilla/5.0 (Linux; Android 9; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Mobile Safari/537.36';
  Object.defineProperty(navigator, 'userAgent', { value: userAgent, writable: true, configurable: true });
  window.innerWidth = 375; // Set desired screen width
  window.innerHeight = 667; // Set desired screen height
  window.dispatchEvent(new Event('resize')); // Trigger resize event
}

// Disable mobile device emulation
function disableMobileEmulation() {
  delete navigator.userAgent;
  window.innerWidth = window.outerWidth; // Reset screen width
  window.innerHeight = window.outerHeight; // Reset screen height
  window.dispatchEvent(new Event('resize')); // Trigger resize event
}

// Usage
enableMobileEmulation();

// Do your testing or device-specific logic here

disableMobileEmulation();
