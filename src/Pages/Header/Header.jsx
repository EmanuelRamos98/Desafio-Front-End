import React, { useEffect, useState } from 'react'
import './header.css'
import { obtenerUser } from '../WorkspacesHome/obtenerWorkspaces'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
    const user = obtenerUser()
    const navegar = useNavigate()
    const location = useLocation()
    const pathname = location.pathname
    const [mostrar, setMostrar] = useState(true)

    useEffect(() => {
        if (pathname === '/') {
            setMostrar(false);
        } else {
            setMostrar(true);
        }
    }, [pathname])

    const handleBack = () => {
        if (pathname != '/') {
            navegar(-1)
        } if (pathname === '/') {
            navegar('/')
        }
    }

    return (
        <nav className='container_header'>
            <div className='perfil_img_container'>
                <div className='btn_container_home'>
                    {mostrar && <button onClick={handleBack} className='btn_back_header'><FaArrowLeft /></button>}
                </div>
                <label>
                    <Link to={'/profileInfo/:id_profile'}>
                        <img src={user.img_perfil} alt="" className='img_perfil' />
                    </Link>
                </label>
            </div>
        </nav>
    )
}

export default Header