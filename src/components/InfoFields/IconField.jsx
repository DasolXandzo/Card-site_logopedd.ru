import React, { useState, useRef } from 'react';
import cl from './IconField.module.css';
import ModalWindow from "../ModalWindow";
import videoPresMP4 from '../../video/presentation.mp4';
import videoPresWEBM from '../../video/presentation.webm';
import CancelButton from '../Buttons/CancelButton';

const IconField = function(props){

    const [modal, setVisible] = useState(false);

    const vidRef = useRef();

    const handlePause = () =>{
        vidRef.current.pause();
    };

    return(

        <div className={cl.iconBlock}>

            <div className={cl.itemsBlock}>

                <div style={{textAlign: 'center'}}>
                    <img className={cl.imageIcon} src={require("../../images/icon.png")} alt='mainIconImage'/>
                </div>

                <button className={cl.videoButton} onClick={() => setVisible(true)}>
                    <img className={cl.imagePlay} src={require("../../images/playButton_black.png")} alt='playButtonImage'/>
                </button>

            </div>

            <ModalWindow visible={modal} setVisible={setVisible}>

                <CancelButton onClick={() => {setVisible(false); handlePause()}}></CancelButton>

                <video width="300" height="700" controls="controls" muted="muted" ref={vidRef}>
                    <source src={videoPresMP4} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                    <source src={videoPresWEBM} type='video/webm; codecs="vp8, vorbis"'/>
                    <p className={cl.errorText}>Ваш браузер не поддерживает этот видеоплеер. Вот <a className={cl.videoLink} href={props.post.videoLink}>ссылка</a> на видео.</p>
                </video>

            </ModalWindow>

            <div className={cl.nameString}>{props.post.name}</div>

            <a className={cl.linkString} href={props.post.link}>{props.post.linkText}</a>

        </div>

    )

}

export default IconField;