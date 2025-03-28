import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './ComicCarousel.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function ComicCarousel() {
    const [comics, setComics] = useState([]); // Khởi tạo state để lưu dữ liệu người dùng

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;

        axios
            .get(`${API_URL}/comics/hot`) // Gửi yêu cầu GET tới API
            .then(({ data }) => {
                setComics(data)
                console.log(data)
            })
            .catch((error) => console.error('Có lỗi xảy ra:', error));
    }, []);

    return (
        <div className={cx('comic-carousel', 'container')}>
            <div className={cx('comic-carousel__title')}>
                <FontAwesomeIcon icon={faStar} />
                <h3>Truyện Hay</h3>
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={6.5}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: `.${cx('swiper-button-next')}`,
                    prevEl: `.${cx('swiper-button-prev')}`,
                }}
                breakpoints={{
                    0: { slidesPerView: 2, spaceBetween: 5 },      // Điện thoại nhỏ
                    480: { slidesPerView: 2, spaceBetween: 5 },  // Điện thoại lớn
                    640: { slidesPerView: 2, spaceBetween: 10 },   // Tablet nhỏ
                    768: { slidesPerView: 4, spaceBetween: 10 },   // Tablet lớn
                    1024: { slidesPerView: 6.5, spaceBetween: 10 },  // Laptop nhỏ
                    1200: { slidesPerView: 6.5, spaceBetween: 10 } // PC lớn
                }}
                
                
            >
                {comics.map((comic, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: '170px', height: 'auto' }}
                    >
                        <Link to={`/comics/detail/${comic.slug}`}>
                            <div className={cx('comic-thumbnail')}>
                                <img src={comic.coverImage} alt={comic.title} />
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
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={cx('swiper-button-next')}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className={cx('swiper-button-prev')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        </div>
    );
}

export default ComicCarousel;
