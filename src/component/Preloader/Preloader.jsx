import React from 'react';
import './style.scss';
class Preloader extends React.Component{
    render(){
        return (
            <div className="container">
                <div id="loader">
                <div id="load1" className="spin"></div>
                <div id="load2" className="spin"></div>
                <div id="load3" className="spin"></div>
                <div id="load4" className="spin"></div>
                <div id="load5" className="spin"></div>
                </div>
            </div>
        );
    }
}
export default Preloader;