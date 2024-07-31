import React from 'react'
import './header.css'
import { obtenerUser } from '../WorkspacesHome/obtenerWorkspaces'


const Header = () => {
    const user = obtenerUser()

    return (
        <nav className='container_header'>
            <div className='perfil_img_container'>
                <img src={user.img_perfil} alt="" className='img_perfil' />
            </div>
        </nav>
    )
}

export default Header