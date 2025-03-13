import { Routes, Route } from "react-router-dom";
import CreateChapter from "../pages/chapters/CreateChapter";

const ChapterRoutes = () => {
    return (
        <Routes>
            <Route path="create/:slug" element={<CreateChapter />}/>
        </Routes>
    );
};

export default ChapterRoutes;