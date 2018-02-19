import './sass/style.scss';
import './scripts/svguse.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Promise from "promise-polyfill";
import Service from './component/Services/Services.jsx';
import Head from './component/head/Head.jsx';
import Menu from './component/Menu/Menu.jsx';
import People from './component/People/People.jsx';
import Preloader from './component/Preloader/Preloader.jsx';
import RegForm from './component/RegForm/RegForm.jsx';
import Advertisement from './component/Advertisement/Advertisement.jsx';
if (!window.Promise) {
  window.Promise = Promise;
}
  ReactDOM.render(
    (<div>
      <RegForm/>
    </div>)
  , document.getElementById('Reg')); 

  console.log('OK');
  document.querySelector('.visible_content').classList.remove('visible_content');
  document.querySelector('.preloader').classList.add('visible_content');
