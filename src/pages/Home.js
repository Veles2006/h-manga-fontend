import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Home() {
    const [users, setUsers] = useState([]); // Khởi tạo state để lưu dữ liệu người dùng

    useEffect(() => {
        fetch('http://localhost:5000/api/users') // Gửi yêu cầu GET tới API
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);  // Lưu dữ liệu vào state
                console.log(data);  // In dữ liệu ra console
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h3>Đây là trang chủ</h3>
            <p>
                <Link to="/detail">Chuyển tới trang detail</Link>
            </p>
            <div style={{ border: '1px solid #333', padding: '4px'}}>
                {/* Kiểm tra xem có dữ liệu không trước khi render */}
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user._id}>
                            <h4>{user.userName}</h4> {/* In tên người dùng */}
                            <p>{user.email}</p> {/* In email của người dùng */}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p> // Nếu chưa có dữ liệu, hiển thị thông báo Loading
                )}
            </div>
        </div>
    );
}

export default Home;

