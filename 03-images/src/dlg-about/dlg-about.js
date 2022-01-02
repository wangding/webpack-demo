import './dlg-about.css';
import logo from './notepad-icon-32.png';
const reposURL = 'https://github.com/wangding/jsnotepad';
require('webpack-jquery-ui/draggable');

class AboutDialog extends HTMLElement {
  constructor() {
    super();

    this.$ = this.querySelector;
    this.innerHTML = this.#html;

    const $btnClose = this.$('.close-btn'),
          $btnOk    = this.$('.btn-ok'),
          $dlgbox   = this.$('.dialogbox'),
          $titleBar = this.$('.notepad-dlg-titlebar');

    $($dlgbox).draggable({handle: $($titleBar)});

    $btnOk.onclick    = () => this.remove();
    $btnClose.onclick = () => this.remove();
  }

  #html = ''
    + '<div class="notepad-dlg-mask notepad-dlg-about">'
      + '<div class="dialogbox notepad-dlgbox">'
        + '<div class="notepad-dlg-titlebar">'
          + '<p class="title">关于 "记事本"</p>'
          + '<span class="close-btn" title="关闭">✖</span>'
        + '</div>'
        + '<div class="main notepad-dlg-main">'
          + '<h1 class="slogan">JSNotepad</h1>'
          + '<hr>'
          + `<img class="app-logo" src="${logo}" alt="JSNotepad">`
          + '<div class="info">'
            + '<p>作者：王顶</p>'
            + '<p>QQ：408542507</p>'
            + '<p>仓库地址：'
              + `<a href="${reposURL}" target="_blank">${reposURL}</a>`
            + '</p>'
          + '</div>'
          + '<input class="btn-ok btn" type="button" value="确定" autofocus>'
        + '</div>'
      + '</div>'
    + '</div>';
}

export default AboutDialog;
