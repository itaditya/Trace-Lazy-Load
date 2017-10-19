import './base.css';

const imgElem = document.querySelector('.lazy-loading--img');
const preloadImgElem = imgElem.querySelector('.preload--img');

import { src, trace } from './assets/img-2.png';
preloadImgElem.setAttribute('src', trace);


const imgNode = new Image();
imgNode.src = src;

imgNode.onload = function () {
  imgElem.classList.add('loaded');
  imgElem.style.backgroundImage = `url(${src})`;
}
