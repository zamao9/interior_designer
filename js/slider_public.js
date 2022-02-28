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
  };



  /* SLIDER */

  let position = 0;
  const slidesToShow = 1,
        slidesToScroll = 1,
        container = document.querySelector('.slider_container'),
        track = document.querySelector('.slider_track'),
        btnPrev = document.querySelector('.btn_prev'),
        btnNext = document.querySelector('.btn_next'),
        itemWidth = container.clientWidth / slidesToShow,
        movePosition = slidesToScroll * itemWidth,
        items = document.querySelectorAll('.slider_item'),
        itemsCount = items.length;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });


  btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns();

});



