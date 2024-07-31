import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerCanal, obtenerMensajes, obtenerWorkspaces } from '../WorkspacesHome/obtenerWorkspaces'
import Header from '../Header/Header'
import FormEnviarMensajes from './FormEnviarMensajes/FormEnviarMensajes'

const Canales = () => {
    const { id_workspace, id_canal } = useParams()
    const mensajes = obtenerMensajes(id_workspace, id_canal)
    const workspaces = obtenerWorkspaces()
    const workspace = workspaces.find(workspace => workspace.id === id_workspace)
    const canales = obtenerCanal(id_workspace)
    const canal = canales.find(canal => canal.id === id_canal)
    
    const [nuevoMensaje, setNuevoMensaje] = useState(mensajes)
    const handleSubmitMensaje =(e)=>{
        e.preventDefault()
        const mensajeValue ={
            author: 'yo',
            fecha: 'hoy a las 20:00',
            id: '6',
            img: '',
            texto: [e.target.text.value]
        }
        setNuevoMensaje([...nuevoMensaje, mensajeValue])
    }

    return (
        <div>
            <Header/>
            <h2>{workspace.nombre}</h2>
            <h2>{canal.nombre}</h2>
            <div>
                {nuevoMensaje.map(mensajes =>
                    <div key={mensajes.id}>
                        <span>{mensajes.autor}</span>
                        <p>{mensajes.texto}</p>
                        <p>{mensajes.fecha}</p>
                    </div>
                )}
            </div>
            <FormEnviarMensajes handleSubmitMensaje={handleSubmitMensaje}/>
        </div>
    )
}

export default Canales