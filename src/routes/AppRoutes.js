import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import ComicRoutes from "./ComicRoutes";
import CategoryRoutes from "./CategoryRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="detail" element={<Detail />} />
                <Route path="comics/*" element={<ComicRoutes />} />
                <Route path="categories/*" element={<CategoryRoutes />} />
            </Route>

            {/* Routes cho xác thực */}
            <Route path="/*" element={<AuthRoutes />} />
        </Routes>
    );
};

export default AppRoutes;
