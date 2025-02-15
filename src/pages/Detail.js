import { Link } from "react-router-dom";

function Detail() {
    return <div>
        <h3>Đây là detail</h3>
        <p>
            <Link to="/">Chuyển tới trang chủ</Link>
        </p>
    </div>;
}

export default Detail;