import React from "react";
import cl from './CheckBoxBlock.module.css';

const CheckBoxBlock = function(props){

    return(
        <div className={cl.checkBoxBlock}>
            <input {...props} className={cl.checkBoxtField} id={props.post.id} type='checkbox' name={props.post.name} value={props.post.value} / >
            <label className={cl.label} for={props.post.id}>{props.post.label}</label>
        </div>
    )

}

export default CheckBoxBlock;