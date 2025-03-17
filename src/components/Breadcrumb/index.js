import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';

const cx = classNames.bind(styles);

const Breadcrumb = ({ title }) => {
    const { slug } = useParams(); // Lấy slug trực tiếp từ URL params
    const location = useLocation();
    const [comicTitle, setComicTitle] = useState(null);

    // Cắt path thành mảng nhưng KHÔNG loại bỏ "detail" trong link
    const pathnames = location.pathname
        .split('/')
        .filter((x) => x && !['page', 'filter'].includes(decodeURIComponent(x)));

    // Fetch thông tin comic từ API nếu có slug hợp lệ
    useEffect(() => {
        if (slug) {
            axios.get(`http://localhost:5000/comics/detail/${slug}`)
                .then((response) => {
                    setComicTitle(response.data.title);
                })
                .catch((error) => {
                    console.error('Lỗi khi lấy thông tin truyện:', error);
                });
        }
    }, [slug]);

    return (
        <nav className={cx('breadcrumb-wrapper')}>
            <Link className={cx('breadcrumb')} to="/">Trang chủ</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const decodedValue = decodeURIComponent(value);
                const isChapter = !isNaN(decodedValue);
                const isDetail = decodedValue.toLocaleLowerCase() === 'detail';

                if (isDetail) return null;

                // Nếu là slug của truyện, hiển thị `comicTitle` thay vì slug
                const displayText = value === slug && comicTitle ? comicTitle : (isChapter ? `Chương ${decodedValue}` : decodedValue);

                return (
                    <span key={to} className={cx('breadcrumb')}>
                        <span>/</span>
                        {isLast ? (
                            title || displayText
                        ) : (
                            <Link to={to}>{displayText}</Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
