function generateQRCode() {
  const text = document.getElementById('text-input').value
  document.getElementById('qrcode').innerHTML = ''
  new QRCode(document.getElementById('qrcode'), {
    text: text,
    width: 256,
    height: 256,
  })

  setTimeout(() => {
    let qrCanvas = document.querySelector('#qrcode canvas')
    let downloadLink = document.getElementById('download-link')
    downloadLink.href = qrCanvas.toDataURL('image/png')
    document.getElementById('download-btn').style.display = 'block'
  }, 500)
}

function shareOnFacebook() {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

function shareOnTwitter() {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent('Check out my QR code!')
  window.open(
    `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    '_blank'
  )
}
