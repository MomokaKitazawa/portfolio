'use strict';


const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

scroll_to_top_btn.addEventListener('click', scroll_to_top);

function scroll_to_top(){
  window.scroll({top: 0, behavior: 'smooth'});
};

window.addEventListener('scroll' , scroll_event );

function scroll_event() {
  if(window.pageYOffset > 150) {
    scroll_to_top_btn.style.opacity = '1';
  }else if(window.pageYOffset < 150){
    scroll_to_top_btn.style.opacity = '0';
  }
};

document.querySelector('.menu-trigger').addEventListener('click',function(){
  document.querySelector('.menu-trigger').classList.toggle('active');
  document.querySelector('.nav').classList.toggle('is-active');
});

// document.querySelector('#menu-top').addEventListener('click',function(){
//   document.querySelector('.nav').classList.remove('is-active');
//   document.querySelector('.menu-trigger').classList.remove('active');
// });

// document.querySelector('#menu-works').addEventListener('click',function(){
//   document.querySelector('.nav').classList.remove('is-active');
//   document.querySelector('.menu-trigger').classList.remove('active');
// });

// document.querySelector('#menu-about').addEventListener('click',function(){
//   document.querySelector('.nav').classList.remove('is-active');
//   document.querySelector('.menu-trigger').classList.remove('active');
// });

// document.querySelector('#menu-info').addEventListener('click',function(){
//   document.querySelector('.nav').classList.remove('is-active');
//   document.querySelector('.menu-trigger').classList.remove('active');
// });

document.addEventListener('click', (e) =>
{
  if(!e.target.closest('.menu-trigger')) {
    document.querySelector('.nav').classList.remove('is-active');
    document.querySelector('.menu-trigger').classList.remove('active');
  } else {
    return;
  }
})