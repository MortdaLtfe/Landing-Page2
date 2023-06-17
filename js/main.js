//---- Main Variables ----//
// To Up Btn //
let land = document.querySelector(".landing")
let showSection = document.querySelector(".meet-team")
let upBtn = document.querySelector(".to-up")

// Scroll //
let scrollShow = document.querySelector(".scroll")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
// Header 
let nav = document.querySelector("header .container nav")
let toggle = document.querySelector(".toggle")

let dropToggle = document.querySelector("#drop-toggle")
let drop = document.querySelector(".drop .drop-item")
let navbar = document.querySelectorAll(".navbar ul a")
let close = document.querySelector(".close-nav")
// Scroller
window.addEventListener("scroll", () =>{
let scrollTop = document.documentElement.scrollTop
  scrollShow.style.width = ((scrollTop / height) * 100 + '%')
})
// Our Work Section //
let control = document.querySelectorAll(".our-work ul li")
let imgs = Array.from(document.images)

//---- Main Functions ----//
// Control 
control.forEach((li) => {
  li.addEventListener("click", removeActive)
  li.addEventListener("click", manageImages)
})
function removeActive() {
  control.forEach((el) =>{
    el.classList.remove("active")
    this.classList.add("active")
  })
}
function manageImages(img){
  imgs.forEach((img) => {
    img.style.transition = "opacity 1"
    img.style.opacity = 0
    setTimeout(() => {
      img.style.display = "none"
    }, 300)  
    
  })
  document.querySelectorAll(this.dataset.web).forEach((el) =>{
    el.style.transition = "opacity 1s"
    setTimeout(() => {
      el.style.display = "block"
    }, 300)
    setTimeout(el.style.opacity = 100, 600)
  })
}

// Scroll UP
window.onscroll = function (){
  if (this.scrollY >= showSection.offsetTop - 600) {
    upBtn.classList.add("show")
  } else {
    upBtn.classList.remove("show")
  }
}
upBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
// Header
toggle.onclick = () => {
  nav.classList.add("show")
}
close.onclick = () => {
  nav.classList.remove("show")
}
// Dropdown 
var D = 0
dropToggle.onclick = ()=>{
  if (D == 0){
    setTimeout(()=>{
      drop.style.display = "block"
    }, 0)
    setTimeout(()=>{
      drop.style.transition = ".5s"
      dropToggle.classList.add("active")
      
      drop.classList.add("active")
      D++      
    }, 0.5)

  }
  else if (D == 1){
    drop.style.transition = ".5s"
    dropToggle.classList.remove("active")
    drop.classList.remove("active")
    setTimeout(()=>{
      drop.style.display = "none"
    }, 00)
    D--
  } 
}
navbar.forEach((a)=>{
  a.onclick = ()=>{
    nav.classList.remove("show")
  }
})