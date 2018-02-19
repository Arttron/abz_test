import React from 'react';
import './style.scss';
import './img/form_bg.jpg';
import './img/header_bg.jpg';
import './img/Logo.png';
import Header from './template/header.jsx';
import Form from './template/form.jsx';
import Footer from './template/footer.jsx';
import _ from 'lodash';
import uuid from "uuid/v1";

class RegForm extends React.Component{
    constructor(props){
        super(props);
        this.dataSelect = [];
        this.descCount = 0;
        this.disableInput = '';
        this.state = {
            'data' : [<option  key={uuid()}> Other </option>],
            'descCount' : 0,
            'disableInput' : '',
            'loadImg_1' : '',
            'loadingImg' : (<img/>)
        };
        this.onSelect = this.onSelect.bind(this);
        this.onChaingDesc = this.onChaingDesc.bind(this);
        this.onFileLoad = this.onFileLoad.bind(this);
        this.onHendleFile = this.onHendleFile.bind(this);
        this.onDelImg = this.onDelImg.bind(this);
    }
    onFileLoad(event){
        
    }
    onDelImg(event){
        let imgTagArr = this.state.loadingImg.map((e)=>e);
        console.log(imgTagArr +' '+ event.target.name);
        imgTagArr.splice(event.target.name, 1, '');
        console.log(imgTagArr);
        this.setState({
            loadingImg : imgTagArr
        });
    }
    onHendleFile(event){
        if(event.target.files.length > 0){
            let imgTagArr = [];
            for(let i=0; i < event.target.files.length; i++){
                imgTagArr[i] = (
                    <div key={uuid()} className='add-img__item'>
                        <input type="button" onClick={this.onDelImg} value="del" name={i}/>   
                        <img width='130' height='130' src={window.URL.createObjectURL(event.target.files[i])} alt=''/>
                    </div>
                );    
            }
            console.log(imgTagArr);
            this.setState({
                loadingImg : imgTagArr
            });
        }else{
            this.setState({
                loadingImg : (<img/>)
            });
        }
    }
    onSelect(event){
        if(event.target.value == "Other")
            this.disableInput="";
        else
            this.disableInput="disabled";
        this.setState({
            disableInput : this.disableInput
        });
    }
    onChaingDesc(event){
        this.descCount = event.target.value.length;
        if(this.descCount>=1000){
            event.target.value = event.target.value.slice(0, 999);
        }
        this.setState({
            descCount : this.descCount
        });
    }
    componentDidMount(event){
        let main = this;
        console.log(this.dataSelect);
        fetch('http://504080.com/api/v1/directories/enquiry-types',{method: 'GET'})
            .then(function(response) {
                response.json().then((data)=>{
                    main.dataSelect = data;
                    console.log(main.dataSelect);
                    main.dataSelect = _.map(data.data,(e)=>{
                        return (
                            <option key={uuid()}>{ e.name}</option>
                        );
                    });
                    console.log(main.dataSelect);
                    main.setState({
                        data: main.dataSelect
                    });
                });                 
            })
            .then(function(user) {
            })
            .catch(  );
    }
    render(){
        return(
            <div>
                {Header}
                <div className="form">
                    <form action="submit" encType="multipart/form-data">
                        <div className="form__content">
                                <label htmlFor="e_type">Enquiry Type *</label>
                                <select defaultValue= 'Other' onClick={this.onSelect} className="form__input" name="e_type" id="e_type">
                                    {this.state.data}
                                </select>
                                <input className="form__input" type="text" name="oth_type" id="oth_type" placeholder="Other" disabled={this.state.disableInput}/>
                                <div className="form__grop">
                                    <label htmlFor="name">Name *
                                        <input className="form__input" type="text" id="name" name="name" placeholder="Dentist"/>
                                    </label>
                                    <label htmlFor="email">Email *
                                            <input className="form__input" type="email" name="email" id="email" placeholder="rechelm@gmail.com"/>
                                    </label>
                                </div>
                                <label htmlFor="subj">Subject *</label>
                                <input className="form__input" type="text" name="subj" id="subj"/>
                                <p className="form__desc-box">
                                    <label className="form__desc-lb" htmlFor="desc">Description *</label>
                                    <span id="char__count">({this.state.descCount}/1000)</span>
                                </p>
                                <textarea onChange={this.onChaingDesc} className="form__input form__area" name="desc" id="desc" maxLength='1000' rows='12'></textarea>
                                <div className="form__add-img" id="add-img-1">
                                    {this.state.loadingImg}
                                    <div id="add-img_1" className="add-img">
                                        <label htmlFor="add-form_1" className="add-img__button" id="add-btn_1">Add photo</label>
                                        <p>Minimum size of 300x300 jpeg ipg png 5 MB</p>
                                        <img width='130' height="130" src={this.state.loadImg_1} alt=""/>
                                        <input id="add-form_1" onChange={this.onHendleFile} className="form__add-d" type="file" name="photo" multiple accept="image/*,image/jpeg"></input>
                                    </div>
                                </div>    
                            </div>
                            <input className="button" type="submit"></input>
                        </form>
                </div>
                {Footer}
            </div>
        )
    }
}
export default RegForm;