import { Routes, Route, Router } from "react-router-dom";
import { Login } from "../pages/Login";
import { Fregisto } from "../componentes/Fregisto";
import { Mapa } from "../componentes/mapa";
import { Barra } from "../componentes/Navbar";
import { Home } from "../pages/home";
export const MainLayout = () => {
    return (
        
        <div > 
    

            <div className="row  ">
                <Barra/>
            </div>
            <div className="row ">
                <div className="col-sm-2 col-md-3 col-lg-4"></div>
                <div className="col-sm-8 col-md-6 col-lg-4 ">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/registro" element={<Fregisto />} />
                        <Route path="/mapa" element={<Mapa />} />
                        <Route path="/home" element={<Home/>} />
                    </Routes>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-4" ></div>
            </div>         
        </div>

    );
};