import React from 'react'

const FormAgregarWorkspaces = ({ handleWorkspace }) => {

    return (
        <form onSubmit={handleWorkspace}>
            <span>Agregar Workspace</span>
            <input type="text" name='text' id='text' className='text_name_workspace' />
            <input type="submit" name='btn' id='btn' className='btn_agregar_workspace' />
        </form>
    )
}

export default FormAgregarWorkspaces