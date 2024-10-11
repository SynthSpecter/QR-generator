// Attendre que le DOM soit chargé avant d'ajouter les écouteurs d'événements
// Wait for the DOM to be loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn')
  const facebookBtn = document.getElementById('facebook-btn')
  const twitterBtn = document.getElementById('twitter-btn')

  generateBtn.addEventListener('click', generateQRCode)
  facebookBtn.addEventListener('click', shareOnFacebook)
  twitterBtn.addEventListener('click', shareOnTwitter)
})
