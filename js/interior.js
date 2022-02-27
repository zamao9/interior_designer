document.addEventListener('DOMContentLoaded', () => {


  burgerActive();

  function burgerActive() {

    let burger = document.getElementById('burger'),
        nav = document.getElementById('nav'),
        links = document.querySelectorAll('.links'),
        body = document.getElementsByTagName('body');

    burger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
      nav.classList.toggle('active');
      body[0].classList.toggle('block');
    })

    for (let i=0; links.length > i; ++i) {
      links[i].addEventListener('click', (event) => {
        event.currentTarget.classList.remove('active');
        nav.classList.remove('active');
        burger.classList.remove('active');
        body[0].classList.remove('block');
      })
    }



  }






})
