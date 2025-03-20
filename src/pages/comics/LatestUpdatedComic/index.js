import { Link, useParams } from 'react-router-dom';
import { use, useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faFlag } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';

import styles from './LatestUpdatedComic.module.scss';

const cx = className.bind(styles);

const filters = [
    { title: 'Tình trạng', options: ['Đang tiến hành', 'Hoàn thành'] },
    {
        title: 'Quốc gia',
        options: ['Trung Quốc', 'Việt Nam', 'Hàn Quốc', 'Nhật Bản', 'Mỹ'],
    },
];

function LatestUpdatedComic() {
    const [comics, setComics] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const { page } = useParams();

    useEffect(() => {
        setCurrentPage(Number(page) || 1);
    }, [page]);

    useEffect(() => {
        // Gửi yêu cầu GET tới API với thông tin trang (trang 1)
        const API_URL = process.env.REACT_APP_API_URL;

        axios
            .get(`${API_URL}/comics/page/${currentPage}`)
            .then(({ data }) => {
                setComics(data.comics);
                setTotalPages(data.totalPages);
                updatePages(currentPage, data.totalPages);
            }) // Gán dữ liệu truyện vào state
            .catch((error) => console.error('Có lỗi xảy ra:', error));
    }, [currentPage]);

    const updatePages = (current, total) => {
        let newPages = [];

        if (total <= 5) {
            newPages = Array.from({ length: total }, (_, index) => index + 1);
        } else if (current <= 3) {
            newPages = [1, 2, 3, 4, 5];
        } else if (current >= total - 2) {
            newPages = [total - 4, total - 3, total - 2, total - 1, total];
        } else {
            newPages = [
                current - 2,
                current - 1,
                current,
                current + 1,
                current + 2,
            ];
        }
        setPages(newPages);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className={cx('latest-updated-comic')}>
            <div className={cx('title-page')}>
                <FontAwesomeIcon icon={faFlag} />
                <h2>Truyện Mới Cập Nhật</h2>
            </div>

            <div className={cx('filter')}>
                {filters.map((filter, index) => (
                    <div key={index} className={cx('filter__box')}>
                        <div className={cx('filter__box__title')}>
                            <span>{filter.title}</span>
                        </div>
                        {filter.options.map((option, i) => (
                            <button key={i} className={cx('filter__box__btn')}>
                                {option}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className={cx('main-content')}>
                <ul className={cx('comic-list', 'row')}>
                    {comics.length > 0 ? (
                        comics.map((comic, index) => (
                            <li
                                key={index}
                                className={cx(
                                    'comic-item',
                                    'col-6',
                                    'col-md-3',
                                    'col-lg-2',
                                    'my-4'
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
                                        <Link
                                            to={`/comics/detail/${comic.slug}`}
                                        >
                                            {comic.title}
                                        </Link>
                                    </h3>
                                    <p>
                                        <Link
                                            to={`/comics/detail/${comic.slug}`}
                                        >
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
            </div>
            <div className={cx('pagination')}>
                <ul className={cx('pagination-list')}>
                    {/* Nút <<: Chuyển đến trang đầu */}
                    {currentPage > 1 && (
                        <li
                            className={cx('pagination-item')}
                            onClick={() => handlePageChange(1)}
                        >
                            <Link to={`/comics/page/1`}>
                                <img
                                    src="https://icons.getbootstrap.com/assets/icons/chevron-double-left.svg"
                                    alt="chevrons-right"
                                />
                            </Link>
                        </li>
                    )}

                    {currentPage > 1 && (
                        <li
                            className={cx('pagination-item')}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <Link to={`/comics/page/${currentPage - 1}`}>
                                <img
                                    src="https://icons.getbootstrap.com/assets/icons/chevron-left.svg"
                                    alt="chevrons-right"
                                />
                            </Link>
                        </li>
                    )}

                    {pages.map((page) => (
                        <li
                            key={page}
                            className={cx('pagination-item', {
                                'pagination-item--active': currentPage === page,
                            })}
                            onClick={() => handlePageChange(page)}
                        >
                            <Link to={`/comics/page/${page}`}>{page}</Link>
                        </li>
                    ))}

                    {currentPage < totalPages && (
                        <li
                            className={cx('pagination-item')}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <Link to={`/comics/page/${currentPage + 1}`}>
                                <img
                                    src="https://icons.getbootstrap.com/assets/icons/chevron-right.svg"
                                    alt="chevron-right"
                                />
                            </Link>
                        </li>
                    )}

                    {currentPage < totalPages && (
                        <li
                            className={cx('pagination-item')}
                            onClick={() => handlePageChange(totalPages)}
                        >
                            <Link to={`/comics/page/${totalPages}`}>
                                <img
                                    src="https://icons.getbootstrap.com/assets/icons/chevron-double-right.svg"
                                    alt="chevrons-right"
                                />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default LatestUpdatedComic;
