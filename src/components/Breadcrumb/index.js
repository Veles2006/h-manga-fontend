import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Breadcrumb = ({ title }) => {
    const location = useLocation(); // Lấy URL hiện tại
    const pathnames = location.pathname
        .split('/')
        .filter((x) => x && !['detail'].includes(decodeURIComponent(x))); // Cắt thành mảng

    return (
        <nav className={cx('breadcrumb-wrapper')}>
            <Link className={cx('breadcrumb')} to="/">
                Trang chủ
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`; // Tạo đường dẫn từng cấp
                const isLast = index === pathnames.length - 1;
                const decodedValue = decodeURIComponent(value);

                return (
                    <span key={to} className={cx('breadcrumb')}>
                        <span>/</span>
                        {isLast ? (
                            title || decodedValue
                        ) : (
                            <Link to={to}>{decodedValue}</Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
};

export default Breadcrumb;
