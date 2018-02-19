import React from 'react';
import './style.scss';
import './img/form_bg.jpg';
import './img/header_bg.jpg';
import './img/Logo.png';
import Header from './template/header.jsx'
import Form from './template/form.jsx'
import Footer from './template/footer.jsx'

class RegForm extends React.Component{
    render(){
        return(
            <div>
                {Header}
                {Form}
                {Footer}
            </div>
        )
    }
}
export default RegForm;