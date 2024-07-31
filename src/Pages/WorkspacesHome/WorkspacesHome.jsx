import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerCanal, obtenerWorkspaces } from './obtenerWorkspaces'
import Header from '../Header/Header'
import './WorkspaceHome.css'
import FormHomeworkspaces from './FormHomeworkspaces/FormHomeworkspaces'



const WorkspacesHome = () => {
    const { id_workspace } = useParams()

    const workspaces = obtenerWorkspaces()
    const workspace = workspaces.find(workspace => workspace.id === id_workspace)
    const canales = obtenerCanal(id_workspace)


    const [nuevoCanal, setNuevoCanales] = useState(canales)

    const handleSubmit =(e)=>{
        e.preventDefault()
        const canalesValue ={
            nombre: [e.target.text.value],
            mensajes: [],
            id: '4'
        } 
        setNuevoCanales([...nuevoCanal, canalesValue])
    } 


    return (
        <section>
            <Header />
            <div className='workspacesHome'>
                <h2 className="nombre"># {workspace.nombre}</h2>
                <div className="canales">
                    {nuevoCanal.map(canal =>
                        <div key={canal.id}>
                            <Link to={`/workspace/${id_workspace}/canal/${canal.id}`}># {canal.nombre}</Link>
                        </div>
                    )}
                </div>
            </div>
            <FormHomeworkspaces handleSubmit={handleSubmit} />
        </section>
    )
}

export default WorkspacesHome