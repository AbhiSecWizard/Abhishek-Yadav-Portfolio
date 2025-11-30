import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
    return (    
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}