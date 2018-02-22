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
        this.fileLoad;
        this.fileList;
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
        this.listPreviewImg = this.listPreviewImg.bind(this);
    }
    onFileLoad(event){
        
    }
    onDelImg(event){
        let imgTagArr = this.state.loadingImg.map((e)=>e);
        console.log(this.fileLoad.files);
            this.fileLoad.files[event.target.name] = '';
        console.log(this.fileLoad.files);
        imgTagArr.splice(event.target.name, 1, '');
        console.log(imgTagArr);
        this.setState({
            loadingImg : imgTagArr
        });
    }
    listPreviewImg(imgList){

    }
    onHendleFile(event){
        if(event.target.files.length > 0){
            if(event.target.files[0].size > 5000000){
                alert("Size file is Large");
                return 1;
            }
            let imgCon;
            this.fileList = event.target.files;
            let imgTest = new Image();
            let src = window.URL.createObjectURL(event.target.files[0]);
            imgTest.src = window.URL.createObjectURL(event.target.files[0]);
            imgTest.onload = (e)=>{
                if(imgTest.width > 300 || imgTest.height>300){
                    alert("Size file is Large");
                    return 1;
                }
                if(imgTest.width > imgTest.height){
                    imgCon = (<img width='auto' height="130" src={src} alt=""/>);
                }else{
                    imgCon = (<img width='130' height='auto' src={src} alt=""/>);
                }
                console.log(imgTest.width);
                this.setState({
                    loadImg_1: imgCon
                });
            }
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
                    main.dataSelect = _.map(data.data,(e)=>{
                        return (
                            <option key={uuid()}>{ e.name}</option>
                        );
                    });
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
                    <form action="http://504080.com/api/v1/support" encType="multipart/form-data" method="post" >
                        <div className="form__content">
                                <p className='form__content__mark-text'>Fields marked “*” are required</p>
                                <label htmlFor="enquiry_type">Enquiry Type *</label>
                                <select defaultValue= 'Other' onClick={this.onSelect} className="form__input" name="enquiry_type" id="e_type">
                                    {this.state.data}
                                </select>
                                <input required className={this.state.disableInput + ' form__input'} type="text" name="oth_type" id="oth_type" placeholder="Other" disabled={this.state.disableInput}/>
                                <div className="form__grop">
                                    <label htmlFor="user_name">Name *
                                        <input className="form__input" type="text" id="name" name="user_name" placeholder="Dentist"/>
                                    </label>
                                    <label htmlFor="email">Email *
                                            <input className="form__input" type="email" name="email" id="email" required placeholder="rechelm@gmail.com"/>
                                    </label>
                                </div>
                                <label htmlFor="subject">Subject *</label>
                                <input className="form__input" type="text" name="subject" required id="subj"/>
                                <p className="form__desc-box">
                                    <label className="form__desc-lb" htmlFor="description">Description *</label>
                                    <span id="char__count">({this.state.descCount}/1000)</span>
                                </p>
                                <textarea onChange={this.onChaingDesc} className="form__input form__area" name="description" id="desc" required maxLength='1000' rows='9'></textarea>
                                <div className="form__add-img" id="add-img-1">
                                    <div id="add-img_1" className="add-img">
                                        <label htmlFor="add-form_1" className="add-img__button" id="add-btn_1">Add photo</label>
                                        <p>Minimum size of 300x300 jpeg ipg png 5 MB</p>
                                        {this.state.loadImg_1}
                                        <input accept="image/jpeg, image/png" ref={(input) => { this.fileLoad = input; }} id="add-form_1" onChange={this.onHendleFile} className="form__add-d" type="file" name="photo"></input>
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