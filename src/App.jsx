import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import WorkspacesHome from './Pages/WorkspacesHome/WorkspacesHome'
import Canales from './Pages/Canales/Canales'
import ProfileInfo from './Pages/ProfileInfo/ProfileInfo'



const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/workspacesHome/:id_workspace' element={<WorkspacesHome />} />
                <Route path="/workspace/:id_workspace/canal/:id_canal" element={<Canales />} />
                <Route path='/profileInfo/:id_profile' element={<ProfileInfo />} />
            </Routes>
        </>
    )
}
export default App