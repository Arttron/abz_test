import React from 'react';

export default (
<div className="form">
    <form action="submit" encType="multipart/form-data">
        <div className="form__content">
                <label htmlFor="e_type">Enquiry Type *</label>
                <select className="form__input" name="e_type" id="e_type">
                    <option>Other</option>
                </select>
                <input className="form__input" type="text" name="oth_type" id="oth_type" placeholder="Other"/>
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
                    <span id="char__count">(0/1000)</span>
                </p>
                <textarea className="form__input form__area" name="desc" id="desc" maxLength='1000' rows='4'></textarea>
                <div className="form__add-img" id="add-img-1">
                    <div id="add-img_1" className="add-img">
                        <button type="button" id="add-btn_1">Add photo</button>
                        <p>Minimum size of 300x300 jpeg ipg png 5 MB</p>
                    </div>
                    <input id="add-form_1" className="form__add-d" type="file" name="photo" multiple accept="image/*,image/jpeg"></input>
                </div>    
            </div>
            <input className="button" type="submit"></input>
        </form>
    </div>
    );