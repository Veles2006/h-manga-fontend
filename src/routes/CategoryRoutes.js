import { Routes, Route } from "react-router-dom";
import CategoryPage from "../pages/categories/CategoryPage";
import CategoryCreate from "../pages/categories/CategoryCreate";

const CategoryRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<CategoryPage />} />
            <Route path="create" element={<CategoryCreate />} />
        </Routes>
    );
};

export default CategoryRoutes;
