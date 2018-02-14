import React from 'react';
import logo from '../../img/Logo.png';
import searchIcon from '../../svg/symbols.svg';
import _ from "lodash";
import "./style.scss";
class Head extends React.Component {
    render(){
        return (
            <header className="header container">
                <a href="#"><img className="header__logo header__logo-img" src={logo} alt="Denteez Logo"/></a>
                <form action="submit" className="search__input header__search">
                        <button>
                        <svg className="search__icon">
                        <use xlinkHref={searchIcon+"#magnifying-glass-browser"}/>
                        </svg>
                        </button>
                        <input type="text" placeholder="Company Name"/>
                </form>
                <div className="header__icon">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="header__icon-svg">
                            <use xlinkHref={searchIcon+"#002-communication"}/>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="header__icon-svg">
                            <use xlinkHref={searchIcon+"#001-alarm-bell"}/>
                        </svg> 
                    </a>
                </div>
                <div className="header__login-user">
                    <a href='#' className="login-user__avatar"></a>
                    <p className="login-user__name">Maximillian Beekeeper</p>
                 </div>
            </header>
        );
    }
}
export default Head;