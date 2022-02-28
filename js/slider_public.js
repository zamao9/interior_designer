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

});


$(document).ready(function () {

  let position = 0;
  const slidesToShow = 1,
        slidesToScroll = 1,
        container = $('.slider_container'),
        track = $('.slider_track'),
        item = $('.slider_item'),
        btnPrev = $('.btn_prev'),
        btnNext = $('.btn_next'),
        itemWidth = container.width() / slidesToShow,
        movePosition = slidesToScroll * itemWidth,
        itemsCount = item.length;

  item.each(function(index, item) {
    $(item).css({
      minWidth: itemWidth,
    });
  });

  btnPrev.click(function() {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });


  btnNext.click(function() {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    });
  };

  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop(
      'disabled',
      position <= -(itemsCount - slidesToShow) * itemWidth
    );
  };

  checkBtns();


})


