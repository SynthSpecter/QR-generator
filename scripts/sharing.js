// Fonction pour partager sur Facebook
// Function to share on Facebook
function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

// Fonction pour partager sur Twitter
// Function to share on Twitter
function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Check out my QR code!')
  window.open(
    `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    '_blank'
  )
}
