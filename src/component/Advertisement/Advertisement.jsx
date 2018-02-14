import React from 'react';
import './style.scss';
class Advertisement extends React.Component {
    render(){
        return (
           <div>
               <div className="advertisement">
                <h4 className="advertisement__header">Advertisement</h4>
                <a className="advertisement__banner" href="#">
                    <img src={this.props.advImg} alt="Three Stars and Crow"/>
                </a>
                <p className="advertisement__text">Ads By Denteez.com</p>
            </div>
            </div>
        );
    }
}
export default Advertisement;