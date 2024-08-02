import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import FormEnviarMensajes from './FormEnviarMensajes/FormEnviarMensajes'
import { obtenerFechaDeHoy } from '../../Componets/fecha'

const Canales = () => {
    const { id_workspace, id_canal } = useParams()
    const workspaceSinParsear = localStorage.getItem('nuevoMook')
    const workspaces = JSON.parse(workspaceSinParsear)
    const workspace = workspaces.find(workspace => workspace.id === id_workspace)
    const canales = localStorage.getItem('nuevoMook2')
    const canalparsado = JSON.parse(canales)
    const canal = canalparsado.find(canal => canal.id === id_canal)
    const mensajes = canal.mensajes

    const [nextId, setNextId] = useState(6)
    const [nuevoMensaje, setNuevoMensaje] = useState(mensajes)
    const fecha = obtenerFechaDeHoy()

    const handleSubmitMensaje = (e) => {
        e.preventDefault()
        const mensajeValue = {
            author: 'Pepe',
            fecha: fecha,
            id: nextId.toString(),
            img: '',
            texto: [e.target.text.value]
        }
        setNextId(nextId + 1)
        setNuevoMensaje([...nuevoMensaje, mensajeValue])
    }

    return (
        <div>
            <Header />
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
            <FormEnviarMensajes handleSubmitMensaje={handleSubmitMensaje} />
        </div>
    )
}

export default Canales