const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', ()=> {
    menu.classList.add('active');
})
closeElem.addEventListener('click', ()=> {
    menu.classList.remove('active');
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('active');
})

// skills lvl scale 

const counters = document.querySelectorAll('.skills__wrapper_percent'),
      counters_lvl = document.querySelectorAll('.skills__wrapper_lvl');

counters.forEach((item, i) => {
    counters_lvl[i].style.width = item.innerHTML;
})


