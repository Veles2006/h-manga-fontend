import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Đây là nơi các `pages` được hiển thị */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;