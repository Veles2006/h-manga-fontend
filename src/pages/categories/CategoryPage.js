import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function CategoryPage() {
    const [categories, setCategories] = useState([]); // Khởi tạo state để lưu dữ liệu người dùng
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${API_URL}/categories`) // Gửi yêu cầu GET tới API
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);  // Lưu dữ liệu vào state
                console.log(data.length);  // In dữ liệu ra console
            })
            .catch((error) => console.error('Error:', error));
        
        fetch(`${API_URL}/categories`) // Gửi yêu cầu GET tới API
    }, [API_URL]);

    return (
        <div>
            <h3>Đây là danh sách truyện</h3>
            <p>
                <Link to="/categories/create">Chuyển tới trang category create</Link>
            </p>
            <div style={{ border: '1px solid #333', padding: '4px'}}>
                {/* Kiểm tra xem có dữ liệu không trước khi render */}
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category._id}>
                            <h4>{category.title}</h4> {/* In tên người dùng */}
                            <p>{category.description}</p> {/* In email của người dùng */}
                            <p>{category.quantity}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p> // Nếu chưa có dữ liệu, hiển thị thông báo Loading
                )}
            </div>
        </div>
    );
}

export default CategoryPage;

