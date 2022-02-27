document.addEventListener('DOMContentLoaded', () => {


  burgerActive();

  function burgerActive() {

    let burger = document.getElementById('burger'),
        nav = document.getElementById('nav'),
        links = document.querySelectorAll('.links');

    burger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
      nav.classList.toggle('active');
    })

    for (let i=0; links.length > i; ++i) {
      links[i].addEventListener('click', (event) => {
        for (let i=0; links.length > i; ++i) {
          links[i].classList.remove('active');
        }
        event.currentTarget.classList.add('active');
        nav.classList.remove('active');
        burger.classList.remove('active');
      })
    }



  }






})
