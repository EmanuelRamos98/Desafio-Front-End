const obtener =()=>{
    const data = localStorage.getItem('mook')
    return JSON.parse(data)
}

export {obtener}