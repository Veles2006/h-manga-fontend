import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ComicCreate.module.scss';

const cx = classNames.bind(styles);

function ComicCreate() {
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        categories: [],
        coverImage: null,
        status: 'ongoing',
    });

    // Lấy danh sách thể loại
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5000/categories');
            const data = await response.json();
            setCategories(data);
        } catch (err) {
            console.error('Lỗi khi lấy thể loại:', err);
        }
    };

    // Cập nhật state khi nhập dữ liệu
    const handleChangeInput = (e) => {
        const { name, value, files, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    // Cập nhật danh sách thể loại đã chọn
    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            categories: selectedCategories,
        }));
    }, [selectedCategories]);

    const handleCategoryClick = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    // Xử lý gửi form
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        const dataToSend = new FormData();
        dataToSend.append('title', formData.title);
        dataToSend.append('description', formData.description);
        dataToSend.append('categories', JSON.stringify(formData.categories));
        dataToSend.append('coverImage', formData.coverImage);
        dataToSend.append('status', formData.status);

        try {
            const response = await fetch('http://localhost:5000/comics/create', {
                method: 'POST',
                body: dataToSend,
            });

            const result = await response.json();
            if (response.ok) {
                alert('Thêm truyện thành công!');
                navigate('/comics');
            } else {
                alert(`Lỗi: ${result.message}`);
            }
        } catch (error) {
            console.error('Lỗi kết nối:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại!');
        } finally {
            setIsSubmitting(false);
            resetForm();
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            categories: [],
            coverImage: null,
            status: 'ongoing',
        });
        setSelectedCategories([]);
    };

    return (
        <div className={cx('mt-4', 'page-comic-create')}>
            <h3>Đăng truyện</h3>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Tên truyện"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChangeInput}
                    required
                />
                <FormInput
                    label="Mô tả"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChangeInput}
                    required
                />
                <CategorySelector
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onCategoryClick={handleCategoryClick}
                />
                <FormFileInput
                    label="Ảnh bìa"
                    id="coverImage"
                    name="coverImage"
                    onChange={handleChangeInput}
                    required
                />
                <FormSelect
                    label="Trạng thái"
                    id="status"
                    name="status"
                    value={formData.status}
                    options={[
                        { value: 'ongoing', text: 'Đang ra' },
                        { value: 'completed', text: 'Hoàn thành' },
                    ]}
                    onChange={handleChangeInput}
                />
                <button type="submit" className={cx('btn', 'btn-primary')} disabled={isSubmitting}>
                    {isSubmitting ? 'Đang xử lý...' : 'Thêm truyện'}
                </button>
            </form>
        </div>
    );
}

// Component Input
const FormInput = ({ label, id, ...props }) => (
    <div className={cx('mb-3')}>
        <label htmlFor={id} className={cx('form-label')}>{label}</label>
        <input className={cx('form-control')} id={id} {...props} />
    </div>
);

// Component File Input
const FormFileInput = ({ label, id, ...props }) => (
    <div className={cx('mb-3')}>
        <label htmlFor={id} className={cx('form-label')}>{label}</label>
        <input type="file" className={cx('form-control')} id={id} {...props} />
    </div>
);

// Component Select
const FormSelect = ({ label, id, options, ...props }) => (
    <div className={cx('mb-3')}>
        <label htmlFor={id} className={cx('form-label')}>{label}</label>
        <select className={cx('form-control')} id={id} {...props}>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.text}</option>
            ))}
        </select>
    </div>
);

// Component Chọn Thể Loại
const CategorySelector = ({ categories, selectedCategories, onCategoryClick }) => (
    <div className={cx('mb-3')}>
        <label htmlFor="categories">Thể loại:</label>
        <div id="categories" className={cx('category-container')}>
            {categories.map((category, index) => (
                <div
                    key={index}
                    className={cx('category-item', { 'category-item--selected': selectedCategories.includes(category.title) })}
                    onClick={() => onCategoryClick(category.title)}
                >
                    {category.title}
                </div>
            ))}
        </div>
    </div>
);

export default ComicCreate;
