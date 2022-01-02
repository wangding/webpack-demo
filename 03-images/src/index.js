import './layout.css';
import icon from './icon.svg';
import logo from './nodejs.jpg';

const $body = document.body;
$body.innerHTML = `
  <div>
    <img src="${icon}">
  </div>
  <div>
    <img src="${logo}">
  </div>`
