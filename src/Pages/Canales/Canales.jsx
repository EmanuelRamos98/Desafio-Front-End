import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerCanal, obtenerMensajes, obtenerWorkspaces } from '../WorkspacesHome/obtenerWorkspaces'
import Header from '../Header/Header'

const Canales = () => {
    const { id_workspace, id_canal } = useParams()
    const mensajes = obtenerMensajes(id_workspace, id_canal)
    const workspaces = obtenerWorkspaces()
    const workspace = workspaces.find(workspace => workspace.id === id_workspace)
    const canales = obtenerCanal(id_workspace)
    const canal = canales.find(canal => canal.id === id_canal)

    return (
        <div>
            <Header/>
            <h2>{workspace.nombre}</h2>
            <h2>{canal.nombre}</h2>
            <div>
                {mensajes.map(mensajes =>
                    <div key={mensajes.id}>
                        <span>{mensajes.autor}</span>
                        <p>{mensajes.texto}</p>
                        <p>{mensajes.fecha}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Canales