'use strict';

document.querySelector('.menu-trigger').addEventListener('click',function(){
  document.querySelector('.menu-trigger').classList.toggle('active');
  document.querySelector('.nav').classList.toggle('is-active');
});

document.querySelector('#menu-top').addEventListener('click',function(){
  document.querySelector('.nav').classList.remove('is-active');
  document.querySelector('.menu-trigger').classList.remove('active');
});

document.querySelector('#menu-about').addEventListener('click',function(){
  document.querySelector('.nav').classList.remove('is-active');
  document.querySelector('.menu-trigger').classList.remove('active');
});

document.querySelector('#menu-menu').addEventListener('click',function(){
  document.querySelector('.nav').classList.remove('is-active');
  document.querySelector('.menu-trigger').classList.remove('active');
});

document.querySelector('#menu-info').addEventListener('click',function(){
  document.querySelector('.nav').classList.remove('is-active');
  document.querySelector('.menu-trigger').classList.remove('active');
});

