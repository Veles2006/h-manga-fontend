import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CreateChapter = () => {
    const { slug } = useParams(); // Lấy slug từ URL (nếu dùng React Router)
    const [number, setNumber] = useState("");
    const [images, setImages] = useState([]);

    // Xử lý thay đổi input số
    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    // Xử lý thay đổi input file (chọn nhiều ảnh)
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files); // Chuyển FileList thành mảng
        setImages((prevImages) => [...prevImages, ...files]); // Cộng dồn ảnh đã chọn
    };

    // Xử lý khi submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const API_URL = process.env.REACT_APP_API_URL;


        if (!number || images.length === 0) {
            alert("Vui lòng nhập số và chọn ít nhất một ảnh.");
            return;
        }

        // Tạo FormData để gửi dữ liệu lên server
        const formData = new FormData();
        formData.append("number", number);
        console.log(images)
        images.forEach((image, index) => {
            formData.append("images", image);
        });

        console.log("📤 Dữ liệu gửi đi:", formData);

        // Gửi lên API (dùng async/await để dễ debug)
        try {
            const response = await fetch(`${API_URL}/chapters/create/${slug}`, {
                method: "POST",
                body: formData, // Gửi dữ liệu ảnh
            });
        
            // Kiểm tra phản hồi thực tế từ server
            const text = await response.text();
            console.log("📌 Response từ server:", text);
        
            // Nếu phản hồi không phải JSON, in ra lỗi
            try {
                const data = JSON.parse(text);
                if (response.ok) {
                    console.log("✅ Kết quả từ server:", data);
                    alert("Upload thành công!");
                    setImages([]); // Xóa danh sách ảnh sau khi upload
                    setNumber(""); // Xóa số chương
                } else {
                    alert("❌ Lỗi khi upload: " + data.message);
                }
            } catch (jsonError) {
                console.error("❌ Lỗi khi parse JSON, có thể server trả về HTML:", text);
            }
        } catch (error) {
            console.error("❌ Lỗi khi gửi dữ liệu:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tải lên chương mới</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                {/* Input nhập số */}
                <div className="mb-3">
                    <label className="form-label">Số chương:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={number}
                        onChange={handleNumberChange}
                        required
                    />
                </div>

                {/* Input chọn file ảnh */}
                <div className="mb-3">
                    <label className="form-label">Chọn ảnh:</label>
                    <input
                        type="file"
                        className="form-control"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                    />
                </div>

                {/* Hiển thị danh sách ảnh đã chọn */}
                {images.length > 0 && (
                    <div className="mb-3">
                        <h5>Ảnh đã chọn:</h5>
                        <div className="d-flex flex-wrap">
                            {images.map((image, index) => (
                                <div key={index} className="p-2">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Ảnh ${index + 1}`}
                                        className="img-thumbnail"
                                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Nút Submit */}
                <button type="submit" className="btn btn-primary w-100">
                    Tải lên
                </button>
            </form>
        </div>
    );
};

export default CreateChapter;
