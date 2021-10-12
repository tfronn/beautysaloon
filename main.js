// abre e fecha menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// clicar em item do menu-esconder
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
//mudar sombra header ao scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
  })
}

//testimonials slider

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWapperSize: true
    }
  }
})

/* scroll reveal */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal('.image')
scrollReveal.reveal('.text', { delay: 100 }),
  scrollReveal.reveal('.card', { interval: 100 }),
  scrollReveal.reveal('.testimonials')
scrollReveal.reveal('.links', { interval: 100 })
scrollReveal.reveal('header')
scrollReveal.reveal('footer .brand')
scrollReveal.reveal('footer .links')
/* back to top button */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  })
}

/* seção visivel na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
  backToTop()
  changeHeaderWhenScroll()
})
