import React from 'react'
import { obtenerUser } from '../WorkspacesHome/obtenerWorkspaces'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './ProfileInfo.css'

const ProfileInfo = () => {
    const { id_profile } = useParams()
    const user = obtenerUser()
    const navigator = useNavigate()

    const handleBack=()=>{
        navigator(-1)
    }
    return (
        <section className='section_profile'>
            <header>
                <h2>Perfil</h2>
                <button onClick={handleBack}>volver</button>
            </header>
            <div className='profile_container'>
                <img src="/Assets/pepe.jpg" alt="" className='img_profile' />
                <h2 className='nombre_profile'>{user.username} {user.lastname}</h2>
                <p className='info_profile'>Disponible, notificaciones acticas</p>
                <button className='btn_profile'>Cambia tu Estado</button>
                <button className='btn_profile'>Modifica tu Perfil</button>
                <div className='info_contacto_profile'>
                    <p>pepe_pepito@gmail.com</p>
                </div>
            </div>
        </section>
    )
}

export default ProfileInfo