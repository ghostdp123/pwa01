self.addEventListener('install', (e) => {
  console.log('Service Worker installing.')
  // Perform install steps
})
self.addEventListener('activate', (e) => {
  console.log('Service Worker activating.')
})