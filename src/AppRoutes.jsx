import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/index';
import HomePage from "./pages/MainPage/index";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;