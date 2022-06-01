
import { Routes, Route, Router } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/Login";
import { Fregisto } from "../componentes/Fregisto";
import { Mapa } from "../componentes/mapa";
export const MainLayout =()=>{

    return (
        <>
            <div className="main_layout">
            <Home></Home>
        <div>

 <Routes>
  
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Fregisto />} />
          <Route path="/mapa" element={<Mapa />} />
 </Routes>

        </div></div>
        
        
        
        
        </>
    );
};