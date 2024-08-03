import React from 'react'
import './FormAgregarWorkspaces.css'
import { FaCheck } from 'react-icons/fa'

const FormAgregarWorkspaces = ({ handleWorkspace }) => {

    return (
        <form onSubmit={handleWorkspace} className='form_workspace'>
            <h3 className='title_form_workspace'>Agregar Workspace</h3>
            <div className="container_form_workspace">
                <input type="text" name='text' id='text' className='text_name_workspace' />
                <button className='btn_agregar_workspace'><FaCheck /></button>
            </div>
        </form>
    )
}

export default FormAgregarWorkspaces