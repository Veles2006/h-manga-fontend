import { useState, useEffect } from 'react';
import axios from 'axios';
import className from 'classnames/bind';

import styles from './MainContentHome.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function MainContentHome() {
    const [comics, setComics] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        // Gửi yêu cầu GET tới API với thông tin trang (trang 1)
        const API_URL = process.env.REACT_APP_API_URL;

        axios
            .get(`${API_URL}/comics/page/1`)
            .then(({ data }) => {
                setComics(data.comics);
                setTotalPages(data.totalPages);
            }) // Gán dữ liệu truyện vào state
            .catch((error) => console.error('Có lỗi xảy ra:', error));
    }, []);

    return (
        <div className={cx('main-content-home', 'container')}>
            <div className={cx('main-content-home__title')}>
                <FontAwesomeIcon icon={faCloudArrowDown} />
                <h3>Truyện Mới Cập Nhật</h3>
            </div>
            <ul className={cx('comic-list', 'row')}>
                {comics.length > 0 ? (
                    comics.map((comic, index) => (
                        <li
                            key={index}
                            className={cx(
                                'comic-item',
                                'col-6', // Trên màn hình cực nhỏ (≤ 576px), mỗi item chiếm nguyên 12 cột (full width)
                                'col-sm-4', // Trên màn hình nhỏ (≥ 576px), mỗi item chiếm 6 cột (50%)
                                'col-md-3', // Trên màn hình trung bình (≥ 768px), mỗi item chiếm 4 cột (33.33%)
                                'col-lg-2', // Trên màn hình lớn (≥ 992px), mỗi item chiếm 3 cột (25%)
                                'col-xl-2', // Trên màn hình rất lớn (≥ 1200px), mỗi item chiếm 2 cột (16.67%)
                                'my-2'
                            )}
                        >
                            <Link to={`/comics/detail/${comic.slug}`}>
                                <div className={cx('comic-thumbnail')}>
                                    <img
                                        src={comic.coverImage}
                                        alt={comic.title}
                                    />
                                </div>
                            </Link>
                            <div className={cx('comic-title')}>
                                <h3>
                                    <Link to={`/comics/detail/${comic.slug}`}>
                                        {comic.title}
                                    </Link>
                                </h3>
                                <p>
                                    <Link to={`/comics/detail/${comic.slug}`}>
                                        Chapter {comic.lastChapterNumber}
                                    </Link>
                                </p>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>Đang tải dữ liệu...</p>
                )}
            </ul>
            <div className={cx('next-page')}>
                <Link
                    to={`/comics/page/${totalPages === 1 ? '1' : '2'}`}
                    className={cx('next-page__btn')}
                >
                    Xem thêm nhiều truyện
                </Link>
            </div>
        </div>
    );
}

export default MainContentHome;
