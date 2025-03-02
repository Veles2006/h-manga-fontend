import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import className from 'classnames/bind';

import style from './Home.module.scss'
import ComicCarousel from './ComicCarousel';
import MainContentHome from './MainContentHome';

const cx = className.bind(style)

function Home() {
    const [comics, setComics] = useState([]); // Khởi tạo state để lưu dữ liệu người dùng

    useEffect(() => {
        axios.get('http://localhost:5000/comics') // Gửi yêu cầu GET tới API
            .then(({ data }) => setComics(data))
            .catch(error => console.error('Có lỗi xảy ra:', error));
    }, []);

    return (
        <div className={cx('home-page')}>
            <ComicCarousel comics={comics} />
            <MainContentHome />
        </div>
    );
}

export default Home;

