import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { obtenerWorkspaces } from '../../WorkspacesHome/obtenerWorkspaces'
import './workspaces.css'
import FormAgregarWorkspaces from '../FormAgregarWorkspaces/FormAgregarWorkspaces'

const Workspaces = () => {
    const workspace = obtenerWorkspaces()
    const [newWorkspace, setNewWorkspace] = useState(workspace)
    const [nextId, setNextId] = useState(4)

    const obtenerFechaDeHoy = ()=>{
        const fechaActual = new Date()
        const dia = fechaActual.getDate().toString().padStart(2, '0')
        const mes = (fechaActual.getMonth()+1).toString().padStart(2, '0')
        const año = fechaActual.getFullYear()

        const fechaFormateada = `${dia}-${mes}-${año}`
        return fechaFormateada
    }
    const fecha = obtenerFechaDeHoy()


    const handleWorkspace = (e) => {
        e.preventDefault()
        const workspaceValue = {
            nombre: [e.target.text.value],
            fecha_creacion: fecha,
            id: nextId.toString(),
            canales: [{
                nombre: 'General',
                mensajes: [],
                id: '1'
            }]
        }
        setNextId(nextId + 1)
        setNewWorkspace([...newWorkspace, workspaceValue])
    }
    const guardarWorkspace = () => {
        const workspacesJSON = JSON.stringify(newWorkspace)
        return localStorage.setItem('nuevoMook', workspacesJSON)
    }
    guardarWorkspace()

    const workspaceFormLocalStorage = localStorage.getItem('nuevoMook')
    const parseWork = JSON.parse(workspaceFormLocalStorage)

    return (
        <div className='container_workspaces'>
            {parseWork.map(data =>
                <div className='workspaces' key={data.id}>
                    <h2 className="workspaces_name">{data.nombre}</h2>
                    <span className="workspaces_fecha_creacion">{data.fecha_creacion}
                        <Link to={'/WorkspacesHome/' + data.id}>Ver+</Link>
                    </span>
                </div>
            )}
            <FormAgregarWorkspaces handleWorkspace={handleWorkspace} />
        </div>
    )
}

export default Workspaces