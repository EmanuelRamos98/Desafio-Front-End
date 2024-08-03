import React from 'react'
import { obtenerUser } from '../WorkspacesHome/obtenerWorkspaces'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './ProfileInfo.css'
import { FaArrowLeft } from 'react-icons/fa'

const ProfileInfo = () => {
    const { id_profile } = useParams()
    const user = obtenerUser()
    const navigator = useNavigate()

    const handleBack = () => {
        navigator(-1)
    }
    return (
        <section className='section_profile'>
            <header className='header_profile'>
                <h2 className='title_profile'>Perfil</h2>
                <button onClick={handleBack} className='btn_back_profile'><FaArrowLeft /></button>
            </header>
            <div className='profile_container'>
                <img src="/Assets/pepe.jpg" alt="" className='img_profile' />
                <div className="container_btn_profile">
                    <h2 className='nombre_profile'>{user.username} {user.lastname}</h2>
                    <div className='info_profile'>Disponible, notificaciones activas
                        <button className='btn_profile'>Cambia tu Estado</button>
                        <button className='btn_profile'>Modifica tu Perfil</button>
                        <p>pepe_pepito@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo