import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function MainLayout() {

    const location = useLocation();

    console.log(location.pathname, "10");

    return (
        <>
            {/* {location.pathname !== "/ask-ai" && <Header />} */}
            <div className="relative m-8 overflow-hidden">
                <Outlet />
                {/* <div className="fixed bg-(--neon) w-full h-7.5 top-0 left-0" />
                <div className="fixed bg-(--neon) w-full h-7.5 bottom-0 left-0" />
                <div className="fixed bg-(--neon) w-7.5 h-full top-0 left-0" />
                <div className="fixed bg-(--neon) w-7.5 h-full top-0 right-0" /> */}
            </div>
            {/* {location.pathname !== "/ask-ai" && <Footer />} */}
        </>
    );
}
