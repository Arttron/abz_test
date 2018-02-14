import './sass/style.scss';
import './scripts/svguse.js';
//import './html/index.html';
import './img/products/products_1.png';
import './img/products/products_2.png';
import './img/featured_1.png';
import './img/featured_2.png';
import './img/featured_3.png';
import adv_2 from './img/baner_three_stars.png';
import adv_1 from './img/baner_hottest.png';
import React from 'react';
import ReactDOM from 'react-dom';
import Promise from "promise-polyfill";
import Service from './component/Services/Services.jsx'
import Head from './component/head/Head.jsx'
import Menu from './component/Menu/Menu.jsx'
import People from './component/People/People.jsx'
import Preloader from './component/Preloader/Preloader.jsx'
import Advertisement from './component/Advertisement/Advertisement.jsx';
if (!window.Promise) {
  window.Promise = Promise;
}
  ReactDOM.render(
    (<div>
      <Head/>
    </div>)
  , document.getElementById('header'));
  ReactDOM.render(
    (<div>
      <Menu/>
    </div>)
  , document.getElementById('nav_menu'));
  ReactDOM.render(
    (<div>
      <Service/>
    </div>)
  , document.getElementById('app'));
  ReactDOM.render(
    (<div>
      <Advertisement advImg = {adv_1}/>
    </div>)
  , document.getElementById('adv_1'));
  ReactDOM.render(
    (<div>
      <Advertisement advImg = {adv_2}/>
    </div>)
  , document.getElementById('adv_0'));
  ReactDOM.render(
    (<div>
      <People/>
    </div>)
  , document.getElementById('react_people'));

  console.log('OK');
  document.querySelector('.visible_content').classList.remove('visible_content');
  document.querySelector('.preloader').classList.add('visible_content');
