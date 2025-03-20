import { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './CategoryCreate.module.scss';

const cx = classNames.bind(styles);

function CategoryCreate() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const API_URL = process.env.REACT_APP_API_URL;
        

        try {
            const response = await axios.post(`${API_URL}/categories/create`, formData);
            console.log('Dữ liệu đã được gửi đi: ', response.data);
            setFormData({
                title: '',
                description: ''
            })
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }

    }

    return (
        <div className={cx('mt-4', 'page-category-create')}>
            <h3>Thêm thể loại</h3>

            <form onSubmit={handleSubmit}>
                <div className={cx('mb-3')}>
                    <label htmlFor="title" className={cx('form-label')}>
                        Tên thể loại
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={cx('mb-3')}>
                    <label htmlFor="description" className={cx('form-label')}>
                        Mô tả
                    </label>
                    <input
                        type="text"
                        className={cx('form-control')}
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={cx('btn', 'btn-primary')}>
                    Thêm thể loại
                </button>
            </form>
        </div>
    );
}

export default CategoryCreate;
