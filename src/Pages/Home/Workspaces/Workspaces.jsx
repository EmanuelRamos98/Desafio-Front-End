import React from 'react'
import { Link } from 'react-router-dom'
import { obtenerWorkspaces } from '../../WorkspacesHome/obtenerWorkspaces'
import './workspaces.css'

const Workspaces = () => {

    return (
        <div className='container_workspaces'>
            {obtenerWorkspaces().map(data =>
                <div className='workspaces' key={data.id}>
                    <h2 className="workspaces_name">{data.nombre}</h2>
                    <span className="workspaces_fecha_creacion">{data.fecha_creacion}
                    <Link to={'/WorkspacesHome/'+ data.id}>Ver+</Link>
                    </span>
                </div>
            )}
        </div>
    )
}

export default Workspaces