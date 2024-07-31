import React from 'react'

const FormEnviarMensajes = ({handleSubmitMensaje}) => {
    return (
        <form onSubmit={handleSubmitMensaje}>
            <input type="text" id='text' name='text' className='text_mensaje' />
            <input type="submit" id='btn' name='btn_mensaje' className='btn_mensaje' />
        </form>
    )
}

export default FormEnviarMensajes