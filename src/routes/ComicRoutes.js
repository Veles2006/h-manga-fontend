import { Routes, Route } from "react-router-dom";
import ComicCreate from "../pages/comics/ComicCreate";
import ComicPage from "../pages/comics/ComicPage";
import LatestUpdatedComic from "../pages/comics/LatestUpdatedComic";

const ComicRoutes = () => {
    return (
        <Routes>
            <Route path="page/:page" element={<LatestUpdatedComic />} />
            <Route path="create" element={<ComicCreate />} />
            <Route path="" element={<ComicPage />} />
        </Routes>
    );
};

export default ComicRoutes;
