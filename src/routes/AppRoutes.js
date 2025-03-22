import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ComicRoutes from "./ComicRoutes";
import CategoryRoutes from "./CategoryRoutes";
import AuthRoutes from "./AuthRoutes";
import ChapterRoutes from "./ChapterRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Layout chính */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="comics/*" element={<ComicRoutes />} />
                <Route path="chapters/*" element={<ChapterRoutes />} />
                <Route path="categories/*" element={<CategoryRoutes />} />
            </Route>

            {/* Routes cho xác thực */}
            <Route path="/*" element={<AuthRoutes />} />
        </Routes>
    );
};

export default AppRoutes;
