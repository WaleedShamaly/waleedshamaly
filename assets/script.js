const images = document.querySelectorAll('.mySkilsLogo img')
let interval = null 

function showImage() {
  const index = Math.floor(Math.random() * images.length)
  images[index].style.display = 'block'
}

function hideImage() {
  const index = Math.floor(Math.random() * images.length)
  images[index].style.display = 'none' 
}

interval = setInterval(() => {
  showImage()
  setTimeout(hideImage, 1000) 
}, 2000)