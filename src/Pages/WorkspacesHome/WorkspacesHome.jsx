import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { obtenerCanal, obtenerWorkspaces } from './obtenerWorkspaces'
import Header from '../Header/Header'
import './WorkspaceHome.css'
import FormHomeworkspaces from './FormHomeworkspaces/FormHomeworkspaces'



const WorkspacesHome = () => {
    const { id_workspace } = useParams()
    const workspaceSinParsear = localStorage.getItem('nuevoMook')
    const workspaces = JSON.parse(workspaceSinParsear)
    const workspace = workspaces.find(workspace => workspace.id === id_workspace)
    const canales = workspace.canales

    const [mostrar, setMostrar] = useState(false)
    const [newCanales, setNewCanales] = useState(canales)
    const [nextId, setNextId] = useState(4)

    const toggle = () => {
        setMostrar(!mostrar)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const canalesValue = {
            nombre: [e.target.text.value],
            mensajes: [],
            id: nextId.toString()
        }
        setNextId(nextId + 1)
        setNewCanales([...newCanales, canalesValue])
    }

    const guardarCanales = () => {
        const canalesJSON = JSON.stringify(newCanales)
        return localStorage.setItem('nuevoMook2', canalesJSON)
    }
    guardarCanales()

    const canalesLocalStorage = localStorage.getItem('nuevoMook2')
    const parseCanal = JSON.parse(canalesLocalStorage)

    return (
        <section>
            <Header />
            <div className='workspacesHome'>
                <h2 className="nombre"># {workspace.nombre}</h2>
                <div className="canales">
                    {parseCanal.map(canal =>
                        <div key={canal.id}>
                            <Link to={`/workspace/${id_workspace}/canal/${canal.id}`}># {canal.nombre}</Link>
                        </div>
                    )}
                </div>
            </div>
            {mostrar && <FormHomeworkspaces handleSubmit={handleSubmit} />}
            <button onClick={toggle}>
                {mostrar ? 'Cancelar' : 'Crear Canal'}
            </button>
        </section>
    )
}

export default WorkspacesHome