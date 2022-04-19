import {
    Routes,
    Route,
} from "react-router-dom";
import {NewsPage} from "../Pages/NewsPage/NewsPage";
import {MainPage} from "../Pages/MainPage/MainPage";
import {AddPage} from "../Pages/AddPage/AddPage";

export const MainContent = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="*" element={<h1>Не найдено</h1>} />
        </Routes>
    );
}