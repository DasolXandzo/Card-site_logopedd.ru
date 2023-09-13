import React from "react";
import cl from './TitleField.module.css';

const TitleField = function(props){

    return(
        <div className={cl.block}>

            <div className={cl.title}>{props.post.title}</div>

            <div className={cl.postTitle}>{props.post.postTitle}</div>

            <div className={cl.description}>{props.post.body}</div>

        </div>
    )

}

export default TitleField;