// Fonction pour générer le QR code
// Function to generate the QR code
function generateQRCode() {
  const text = document.getElementById('text-input').value
  document.getElementById('qrcode').innerHTML = ''
  new QRCode(document.getElementById('qrcode'), {
    text: text,
    width: 256,
    height: 256,
  })

  // Attendre que le QR code soit généré avant de préparer le téléchargement
  // Wait for the QR code to be generated before preparing the download
  setTimeout(prepareDownload, 500)
}

// Prépare le lien de téléchargement du QR code
// Prepares the QR code download link
function prepareDownload() {
  const qrCanvas = document.querySelector('#qrcode canvas')
  const downloadLink = document.getElementById('download-link')
  downloadLink.href = qrCanvas.toDataURL('image/png')
  document.getElementById('download-btn').style.display = 'block'
}
