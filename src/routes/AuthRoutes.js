import { Routes, Route } from "react-router-dom";
// import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Interest from "../pages/auth/Interest";
import Onboarding from "../pages/auth/Onboarding";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-up/interest" element={<Interest />} />
            <Route path="sign-up/onboarding" element={<Onboarding />} />
        </Routes>
    );
};

export default AuthRoutes;
