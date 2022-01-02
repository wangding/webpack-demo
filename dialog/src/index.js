import './layout.css';

const $body = document.body;
$body.$ = $body.querySelector;
$body.innerHTML = '<input class="test" type="button" value="弹出关于对话框">';

const $btnTest = $body.$('input.test');

import AboutDialog from './dlg-about/dlg-about.js';
customElements.define('about-dialog', AboutDialog);

$btnTest.onclick = () => {
  $body.insertAdjacentHTML('beforeend', '<about-dialog></about-dialog>');
};
