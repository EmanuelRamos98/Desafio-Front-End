const obtenerUser = () => {
    const mook = JSON.parse(localStorage.getItem('mook'))
    return mook.user_info
}

const obtenerWorkspaces = () => {
    const mook = JSON.parse(localStorage.getItem('mook'))
    return mook.workspaces
}

const obtenerCanal =(id_workspace)=>{
    const workspaces = obtenerWorkspaces()
    const workspace = workspaces.find(workspace=> workspace.id===id_workspace)
    return workspace.canales
}

const obtenerMensajes = (id_workspace, id_canal)=>{
    const canales = obtenerCanal(id_workspace)
    const canal = canales.find(mensaje=> mensaje.id === id_canal)
    return canal.mensajes
}


export{obtenerUser, obtenerWorkspaces, obtenerCanal, obtenerMensajes} 