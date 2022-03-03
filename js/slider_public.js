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




  /* POPUP */

  let popupPosition = 0;
  const popupSlidesToShow = 1,
        popupSlidesToScroll = 1,
        popupContainer = document.querySelector('.popup_slider_slider_container'),
        popupTrack = document.querySelector('.popup_slider_slider_track'),
        popupBtnPrev = document.querySelector('.popup_slider_btn_prev'),
        popupBtnNext = document.querySelector('.popup_slider_btn_next'),
        popupItemWidth = popupContainer.clientWidth / popupSlidesToShow,
        popupMovePosition = popupSlidesToScroll * popupItemWidth,
        popupItems = document.querySelectorAll('.popup_slider_slider_item'),
        popupItemsCount = popupItems.length;

  popupItems.forEach((item) => {
    item.style.minWidth = `${popupItemWidth}px`;
  });

  popupBtnPrev.addEventListener('click', () => {
    const popupItemsLeft = Math.abs(popupPosition) / popupItemWidth;
    popupPosition += popupItemsLeft >= popupSlidesToScroll ? popupMovePosition : popupItemsLeft * popupItemWidth;

    popupSetPosition();
    popupCheckBtns();
  });


  popupBtnNext.addEventListener('click', () => {
    const popupItemsLeft = popupItemsCount - (Math.abs(popupPosition) + popupSlidesToShow * popupItemWidth) / popupItemWidth;
    popupPosition -= popupItemsLeft >= popupSlidesToScroll ? popupMovePosition : popupItemsLeft * popupItemWidth;

    popupSetPosition();
    popupCheckBtns();
  });

  const popupSetPosition = () => {
    popupTrack.style.transform = `translateX(${popupPosition}px)`;
  };

  const popupCheckBtns = () => {
    popupBtnPrev.disabled = popupPosition === 0;
    popupBtnNext.disabled = popupPosition <= -(popupItemsCount - popupSlidesToShow) * popupItemWidth;
  };

  popupCheckBtns();


  popupSlider();

  function popupSlider() {
    let popup_container = document.querySelector('.popup_container'),
        popup_close = document.querySelector('.popup_close'),
        slider_item = document.querySelectorAll('.slider_item'),
        body = document.getElementsByTagName('body');

    for (let i=0; slider_item.length > i; ++i) {
      slider_item[i].addEventListener('click', (event) => {

        let indexData = Number(event.currentTarget.getAttribute("index-data"));
        popupPosition = indexData === 0 ? 0 : indexData * -popupItemWidth;
        popupSetPosition();

        popup_container.classList.add('active');
        body[0].classList.add('block');
      })
    };

    popup_close.addEventListener('click', (event) => {
      popup_container.classList.remove('active');
      body[0].classList.remove('block');
    });
  };








});








