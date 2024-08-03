import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import FormEnviarMensajes from './FormEnviarMensajes/FormEnviarMensajes'
import { obtenerFechaDeHoy } from '../../Componets/fecha'
import './Canales.css'


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
            autor: 'Pepe',
            fecha: fecha,
            id: nextId.toString(),
            img: '',
            texto: [e.target.text.value]
        }
        setNextId(nextId + 1)
        setNuevoMensaje([...nuevoMensaje, mensajeValue])
    }

    return (
        <section>
            <Header />
            <div className="container_chat">
                <div className="canal_container_chat">
                    <h2 className='titulo_canal'>{workspace.nombre}</h2>
                    <h2>{canal.nombre}</h2>
                    <div className='canal_mensajes_container'>
                        {nuevoMensaje.map(mensajes =>
                            <div key={mensajes.id} className='canal_mensaje'>
                                <span className='canal_nombre'>{mensajes.autor}</span>
                                <p className='canal_texto'>{mensajes.texto}</p>
                                <p className='canal_fecha'>{mensajes.fecha}</p>
                            </div>
                        )}
                    </div>
                    <div className="container_canal_form">
                        <FormEnviarMensajes handleSubmitMensaje={handleSubmitMensaje} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Canales