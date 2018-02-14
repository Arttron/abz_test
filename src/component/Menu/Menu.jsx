import React from 'react';
import uuid from "uuid/v1";
import "./style.scss";

class Side_Menu extends React.Component {
    render(){
        return (
        <ul className="menu">
            <li key = {uuid()} className="menu__item">
                <svg className="menu__icon-svg">
                    <use xlinkHref="img/symbols.svg#006-house-outline"></use>
                </svg>
                <a href="#" className="menu__link">Feed</a>
            </li>
            <li key = {uuid()} className="menu__item">
                <svg className="menu__icon-svg">
                    <use xlinkHref="img/symbols.svg#005-question"></use>
                </svg>
                <a href="#" className="menu__link">Ask a Collegue</a>
            </li>
            <li key = {uuid()} className="menu__item">
                <svg className="menu__icon-svg">
                    <use xlinkHref="img/symbols.svg#004-building"></use>
                </svg>
                <a href="#" className="menu__link">Compaines</a>
            </li>
            <li key = {uuid()} className="menu__item">
                <svg className="menu__icon-svg">
                    <use xlinkHref="img/symbols.svg#003-sheet"></use>
                </svg>
                <a href="#" className="menu__link">Service Directory</a>
            </li>
        </ul>
        );
    }
}
export default Side_Menu;