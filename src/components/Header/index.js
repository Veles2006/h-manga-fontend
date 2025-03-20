import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;

        axios.get(`${API_URL}/categories`)
        
            .then(({ data }) => setCategories(data))
            .catch(error => console.error('Có lỗi xảy ra:', error));
    }, []);

    return (
        <header className={cx('header')}>
            <HeaderTop />
            <HeaderBottom categories={categories} />
        </header>
    );
}

export default Header;
