import React from 'react'
import './FormEnviarMensajes.css'
import { IoMdSend } from 'react-icons/io'

const FormEnviarMensajes = ({ handleSubmitMensaje }) => {
    return (
        <form onSubmit={handleSubmitMensaje} className='container_form_enviar'>
            <input type="text" id='text' name='text' className='text_mensaje' />
            <button className='btn_mensaje'><IoMdSend /></button>
        </form>
    )
}

export default FormEnviarMensajes