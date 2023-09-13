import React from "react";
import cl from './InfoField.module.css';

const InfoField = function(props){

    return(

        <div className={cl.block}>

            <div className={cl.title}>{props.post.title}</div>

            <div className={cl.description}>{props.post.body}</div>

            <div className={cl.postDescription}>

                <div className={cl.title}>{props.post.first}</div>

                <div className={cl.title}>{props.post.second}</div>

            </div>

        </div>

    )

}

export default InfoField;