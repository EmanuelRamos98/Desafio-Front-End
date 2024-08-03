import React from 'react'
import './FormHomeworkspaces.css'
import { FaCheck } from 'react-icons/fa'

const FormHomeworkspaces = ({ handleSubmit }) => {
    return (
        <div className="container_form">
            <form onSubmit={handleSubmit} className='form_homeworkspaces'>
                <h3 className='title_form_homeworkspaces'>Agregar Canal</h3>
                <div className="container_form_homeworkspace">
                    <input type="text" name='text' id='text' className='input_form_homeworkspaces' />
                    <button className='btn_homeworkspaces' ><FaCheck /></button>
                </div>
            </form>
        </div>
    )
}


export default FormHomeworkspaces