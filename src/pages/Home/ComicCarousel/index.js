import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './ComicCarousel.module.scss';

const cx = classNames.bind(style);

function ComicCarousel() {
    const [comics, setComics] = useState([]); // Khởi tạo state để lưu dữ liệu người dùng

    useEffect(() => {
        axios.get('http://localhost:5000/comics/hot') // Gửi yêu cầu GET tới API
            .then(({ data }) => setComics(data))
            .catch(error => console.error('Có lỗi xảy ra:', error));
    }, []);

    return (
        <div className={cx('comic-carousel')}>
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
            >
                {comics.map((comic, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: '170px', height: 'auto' }}
                    >
                        <div className={cx('comic-thumbnail')}>
                            <img src={comic.coverImage} alt={comic.title} />
                        </div>
                        <div className={cx('comic-title')}>
                            <h3>{comic.title}</h3>
                            <p>Số chương 1000</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={cx('swiper-button-next')}>
                <FontAwesomeIcon  icon={faChevronRight}/>
            </div>
            <div className={cx('swiper-button-prev')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        </div>
    );
}

export default ComicCarousel;
