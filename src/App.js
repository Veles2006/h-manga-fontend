import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Interest from './pages/Interest';
import Onboarding from './pages/Onboarding';
import ComicCreate from './pages/ComicCreate';
import ComicPage from './pages/ComicPage';
import CategoryCreate from './pages/CategoryCreate';
import CategoryPage from './pages/CategoryPage';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    {/* Layout chính chứa các trang chính */}
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} /> {/* Trang chủ */}
                        <Route path="detail" element={<Detail />} />{' '}
                        {/* Trang chi tiết */}
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path='sign-up/interest' element={<Interest />} />
                    <Route path='sign-up/onboarding' element={<Onboarding />} />
                    <Route path='comics/create' element={<ComicCreate />} />
                    <Route path='comics' element={<ComicPage />} />
                    <Route path='categories' element={<CategoryPage />} />
                    <Route path='categories/create' element={<CategoryCreate />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
