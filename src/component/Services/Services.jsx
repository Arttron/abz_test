import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../img/services/pic_1.png';
import _ from "lodash";
import uuid from "uuid/v1";
import "whatwg-fetch";
import "./style.scss";
import Preloader from '../Preloader/Preloader.jsx';
class Service extends React.Component {
    constructor(props) {
        super(props); 
        this. dataRender = [];
        this.state={
              data: undefined             
        };
    }
    componentDidMount() {
        const main = this;
        let serviceItem = (
            <div className="content__services">
                <div className="services__item">
                    <a className="item__link" href="#">
                        <div className="item__img">
                            <img src="./img/services/pic_1.png" alt="service 1"/>
                        </div>
                        <p></p>
                    </a>
                </div>
            </div>
            );
        fetch('http://504080.com/api/v1/services/categories',{method: 'GET', headers: {Authorization:"2018264a1d150284b8f2c70b4992f313b156614b"}})
            .then(function(response) {
                response.json().then((data)=>{
                    main.dataRender = data.data.map((obj)=>{
                         return (   <div key = {uuid()} className="services__item">
                                        <a className="item__link" href="#">
                                            <div className="item__img">
                                                <img src={obj.icon} alt="service 1"/>
                                            </div>
                                            <p>{obj.title}</p>
                                        </a>
                                    </div>
                                );
                    });
                    main.setState({
                        data: data
                    });
                });                 
            })
            .then(function(user) {
                // alert(user.name); // iliakan
            })
            .catch(  );

            this.render(serviceItem);
        }
    render(tmplServ) {
        
        
        if(this.state.data){
            return(
            <div className="content">
                <div className="content__services-head">
                    <h2 className="content__head">Service Directory</h2>
                    <button>Add New Service</button>
                </div>
                <div className="content__services">
                    {this.dataRender}
                </div>
            </div>
            );
        }

        return (
            <div className="content">
                <Preloader/>
            </div>
            )
    }
}

export default Service;