import { data } from "../../../MOOK"

const guardar = ()=>{
    return localStorage.setItem('mook', JSON.stringify(data))
    
}
export {guardar}