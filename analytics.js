// Vercel Web Analytics Initialization
// This script loads the analytics tracking for the site

(function() {
  // Initialize the queue
  window.va = window.va || function() {
    (window.vaq = window.vaq || []).push(arguments);
  };
  
  // Check if we're in production (deployed on Vercel)
  const isProduction = window.location.hostname !== 'localhost' && 
                       window.location.hostname !== '127.0.0.1' &&
                       !window.location.hostname.includes('192.168');
  
  if (!isProduction) {
    console.log('[Vercel Analytics] Running in development mode - analytics disabled');
    return;
  }
  
  // Load the Vercel Analytics script
  // The script path will be automatically configured by Vercel when deployed
  const script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/insights/script.js';
  
  script.onerror = function() {
    console.warn('[Vercel Analytics] Script failed to load. Make sure Web Analytics is enabled in your Vercel project settings.');
  };
  
  document.head.appendChild(script);
})();
