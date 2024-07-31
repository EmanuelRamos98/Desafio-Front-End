import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerCanal, obtenerWorkspaces } from './obtenerWorkspaces'
import Header from '../Header/Header'
import './WorkspaceHome.css'


const WorkspacesHome = () => {
    const { id_workspace} = useParams()
    const workspaces = obtenerWorkspaces()
    const workspace = workspaces.find(workspace => workspace.id === id_workspace) 
    const canales = obtenerCanal(id_workspace)

    return (
        <section>
            <Header/>
        <div className='workspacesHome'>
            <h2 className="nombre"># {workspace.nombre}</h2>
            <div className="canales">
                {canales.map(canal=>
                    <div key={canal.id}>
                        <Link to={`/workspace/${id_workspace}/canal/${canal.id}`}># {canal.nombre}</Link>
                    </div>
                )}
            </div>
        </div>
        </section>
    )
}

export default WorkspacesHome