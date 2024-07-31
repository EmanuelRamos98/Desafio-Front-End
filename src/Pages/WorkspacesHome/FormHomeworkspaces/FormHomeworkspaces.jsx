import React from 'react'

const FormHomeworkspaces = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className='form_homeworkspaces'>
            <input type="text" name='text' id='text' className='input_form_homeworkspaces' />
            <input type='submit' id='btn_homeworkspaces' className='btn_homeworkspaces'/>
        </form>
    )
}

export default FormHomeworkspaces