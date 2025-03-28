import { Routes, Route } from "react-router-dom";
import ComicCreate from "../pages/comics/ComicCreate";
import ComicPage from "../pages/comics/ComicPage";
import LatestUpdatedComic from "../pages/comics/LatestUpdatedComic";
import Detail from "../pages/Detail";
import ReadChapter from "../pages/chapters/ReadChapter";

const ComicRoutes = () => {
    return (
        <Routes>
            <Route path="page/:page" element={<LatestUpdatedComic />} />
            <Route path="detail/:slug" element={<Detail />} />
            <Route path="detail/:slug/:chapter" element={<ReadChapter />} />
            <Route path="create" element={<ComicCreate />} />
            <Route path="comic-page" element={<ComicPage />} />
            <Route path="/" element={<LatestUpdatedComic />}  />
        </Routes>
    );
};

export default ComicRoutes;
