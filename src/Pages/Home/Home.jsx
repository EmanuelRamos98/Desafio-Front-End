import React from 'react'
import { guardar } from '../../Componets/LocalStorage/guadar';
import { obtenerUser } from '../WorkspacesHome/obtenerWorkspaces';
import Workspaces from './Workspaces/Workspaces';
import './home.css'
import Header from '../Header/Header';


const Home = () => {
    guardar()
    const user = obtenerUser()
    return (
        <section className='section_home'>
            <Header />
            <h1 className='title_home'>Slacke</h1>
            <div className='container_home'>
                <img src={user.img} alt="" className='img_home' />
                <div className="container_home_name">Bienvenido
                    <h2 className='name_home'>
                        {user.username} {user.lastname}
                    </h2>
                </div>
            </div>
            <div className="container_workspaces_home">
                <Workspaces />
            </div>
        </section>
    )


}

export default Home