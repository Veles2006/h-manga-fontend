import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function ComicPage() {
    const [comics, setComics] = useState([]); // Khởi tạo state để lưu dữ liệu người dùng

    useEffect(() => {
        fetch('http://localhost:5000/comics') // Gửi yêu cầu GET tới API
            .then((response) => response.json())
            .then((data) => {
                setComics(data);  // Lưu dữ liệu vào state
                console.log(data);  // In dữ liệu ra console
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h3>Đây là danh sách truyện</h3>
            <p>
                <Link to="/comics/create">Chuyển tới trang comic create</Link>
            </p>
            <div style={{ border: '1px solid #333', padding: '4px'}}>
                {/* Kiểm tra xem có dữ liệu không trước khi render */}
                {comics.length > 0 ? (
                    comics.map((comic) => (
                        <div key={comic._id}>
                            <h4>{comic.title}</h4> {/* In tên người dùng */}
                            <p>{comic.description}</p> {/* In email của người dùng */}
                            <p>{comic.coverImage}</p> {/* In email của người dùng */}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p> // Nếu chưa có dữ liệu, hiển thị thông báo Loading
                )}
            </div>
        </div>
    );
}

export default ComicPage;

