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
        axios.get('http://localhost:5000/categories')
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
