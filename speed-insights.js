// Vercel Speed Insights Initialization
// This script loads the speed insights tracking for the site

(function() {
  // Initialize the queue
  window.si = window.si || function() {
    (window.siq = window.siq || []).push(arguments);
  };
  
  // Check if we're in production (deployed on Vercel)
  const isProduction = window.location.hostname !== 'localhost' && 
                       window.location.hostname !== '127.0.0.1' &&
                       !window.location.hostname.includes('192.168');
  
  if (!isProduction) {
    console.log('[Vercel Speed Insights] Running in development mode - speed insights disabled');
    return;
  }
  
  // Load the Vercel Speed Insights script
  // The script path will be automatically configured by Vercel when deployed
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  script.onerror = function() {
    console.warn('[Vercel Speed Insights] Script failed to load. Make sure Speed Insights is enabled in your Vercel project settings.');
  };
  
  document.head.appendChild(script);
})();
