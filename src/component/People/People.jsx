import React from 'react';
import '../../img/people/people_1.png';
import '../../img/people/people_2.png';
import '../../img/people/people_3.png';
import uuid from "uuid/v1";
import "./style.scss";
class Service extends React.Component {
    render(){
        return (
        <div  className="sidebar-block people">
            <h3 className="sidebar-block__header">People you may know</h3>
            <a className="sidebar-block__see-all" href="#">See All</a>
            <div className="clear"></div>
            <div className="sidebar-block__item">
                <h4 className="item__name">Dennis Adems</h4>
                <img src="./img/people_1.png" alt="people_1"/>
                <p className="item__prof">Dentist (Practice Owner)</p>
                <p className="item__location">London, England</p>
                <a className="item__link" href="#">Add Friend</a>
            </div>
            <div className="sidebar-block__item people__item">
                <h4 className="item__name">Mary Carpenter</h4>
                <img src="./img/people_2.png" alt="people_2"/>
                <p className="item__prof">Dentist (Practice Owner)</p>
                <p className="item__location">Belgrade, Serbia</p>
                <a className="item__link" href="#">Add Friend</a>
            </div>
            <div className="sidebar-block__item people__item">
                <h4 className="item__name">Danielle Sazar</h4>
                <img src="./img/people_3.png" alt="people_3"/>
                <p className="item__prof">Dentist (Practice Owner)</p>
                <p className="item__location">Paris, France</p>
                <a className="item__link" href="#">Add Friend</a>
            </div>
        </div>
        );
    }
    

}

export default Service;