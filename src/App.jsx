import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import InfoField from './components/InfoFields/InfoField.jsx';
import TitleField from './components/InfoFields/TitleField.jsx';
import BigButton from './components/Buttons/BigButton.jsx';
import IconField from './components/InfoFields/IconField.jsx';
import ModalWindow from './components/ModalWindow';
import InputBlock from './components/Inputs/InputBlock';
import TextAreaBlock from './components/Inputs/TextAreaBlock';
import FormButton from './components/Buttons/FormButton';
import CheckBoxBlock from './components/Inputs/CheckBoxBlock';
import CancelButton from './components/Buttons/CancelButton';

export default function App() {

  const [modal, setVisible] = useState(false);
  const [successModal, setSuccessVisible] = useState(false);

  const form = useRef();

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [nameError, setNameError] = useState('Поле не может быть пустым.')
  const [phoneError, setPhoneError] = useState('Поле не может быть пустым.')
  const [formValid, setFormValid] = useState(false)
  
  const [checkThird, setCheckThird] = useState(false)
  
  useEffect( () => {
    if(nameError || phoneError){
      setFormValid(false)
    } else{
      setFormValid(true)
    }
  }, [nameError, phoneError])
  
  const blurHandler = (e) => {
    switch (e.target.name){
      case 'userName':
        setNameDirty(true)
        break
      case 'userPhone':
        setPhoneDirty(true)
        break
    }
  }

  const nameHandler = (e) => {
    setName(e.target.value)
    if(e.target.value.length === 0){
      setNameError('Поле не может быть пустым.')
    } else{
      setNameError('')
    }
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value)
    if(e.target.value.length !== 11){
      setPhoneError('Номер должен содержать 11 знаков.')
      if(!e.target.value){
        setPhoneError('Поле не может быть пустым.')
      }
    } else{
      setPhoneError('')
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hmidc2d', 'template_9j2zojm', form.current, 'uy1EPLFB0xspq-3Kk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className="container">

      <IconField post={{name: 'Светлана'}}/>
        
      <TitleField post={{title: 'ЛОГОПЕД ОНЛАЙН', postTitle: 'ВЗРОСЛЫМ, ПОДРОСТКАМ И ДЕТЯМ С 6-ТИ ЛЕТ', body: 'Постановка звуков. Дикция.'}}/>

      <InfoField post={{title: 'ОПЫТ РАБОТЫ:', first: 'медицинский центр, школа, детский сад'}}/>
        
      <InfoField post={{title: 'НАДОЕЛО СТЕСНЯТЬСЯ?', body: 'Бегом к логопеду!'}}/>
        
      <InfoField post={{title: 'ЧИСТАЯ РЕЧЬ – ПУТЬ К УВЕРЕННОСТИ, УВЕЛИЧЕНИЮ ДОХОДА.', body: 'Ты уже в пути?'}}/>
        
      <InfoField post={{first: 'ЦЕНА ДИАГНОСТИКИ – 850 РУБ.'}}/>

      <ModalWindow visible={modal} setVisible={setVisible}>

        <CancelButton onClick={() => setVisible(false)}></CancelButton>

        <div className="title">ОСТАВИТЬ ЗАЯВКУ</div>

        <form ref={form} onSubmit={sendEmail}>

          <InputBlock post={{type: 'text', title: 'Имя', name: 'userName', placeholder: 'Иван'}} onBlur={e => blurHandler(e)} onChange={e => nameHandler(e)}/>
          {(nameDirty && nameError) && <div style={{color:'red', fontSize:'14px'}}>{nameError}</div>}

          <InputBlock post={{type: 'tel', title: 'Номер телефона', name: 'userPhone', maxlength: '11', placeholder: '89007003233'}} onBlur={e => blurHandler(e)} onChange={e => phoneHandler(e)} />
          {(phoneDirty && phoneError) && <div style={{color:'red', fontSize:'14px'}}>{phoneError}</div>}

          <CheckBoxBlock post={{name: 'userProblem1', id: 'userProblem1', value: 'Звукопроизошение.', label: 'Звукопроизошение'}} />

          <CheckBoxBlock post={{name: 'userProblem2', id: 'userProblem2', value: 'Дикция.', label: 'Дикция'}} />

          <CheckBoxBlock post={{label: 'Другое', id: 'userComment'}} onChange={() => setCheckThird(!checkThird)}/>
          {checkThird && <div><TextAreaBlock post={{name: 'comment', cols: '40', rows: '2', placeholder: 'Здесь вы можете рассказать о себе и описать цель визита'}} /></div>}

          <FormButton type='submit' disabled={!formValid} onClick={() => {setSuccessVisible(true); window.ym(94915211,'reachGoal','btnSendForm')}}>ОТПРАВИТЬ ФОРМУ</FormButton>
          {successModal && <ModalWindow visible={successModal} setVisible={setSuccessVisible}><div className='title'>Сообщение отправлено и будет обработано в порядке очереди.<br></br>Ожидайте ответ.</div></ModalWindow>}

        </form>

      </ModalWindow>

      <div className='lineBlock'>
        <hr color="#faebd8" size="7px"/>
      </div>

      <BigButton onClick={() => {setVisible(true); window.ym(94915211,'reachGoal','btnOpenForm')}}>СТАРТУЕМ!</BigButton>

     </div>
   )
}