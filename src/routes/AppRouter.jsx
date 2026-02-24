import { Route, Routes } from "react-router-dom";
import AIChatbot from "../components/AIChatbot";
import Home from "../pages/Home";
;


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ask-ai" element={<AIChatbot />} />
        </Routes>
    );
}
