import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ReadChapter.module.scss';
import Breadcrumb from '../../../components/Breadcrumb';
import { dateAPIHandle } from '../../../utils/dateUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faExclamationTriangle,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import Comment from '../../../components/Comment';

const cx = classNames.bind(styles);

function ReadChapter() {
    const { slug, chapter } = useParams(); // Lấy dữ liệu từ URL
    const [story, setStory] = useState({});
    const [comic, setComic] = useState({});
    const [prevChapter, setPrevChapter] = useState(null);
    const [nextChapter, setNextChapter] = useState(null);

    useEffect(() => {
        if (!slug || !chapter) return;

        const API_URL = process.env.REACT_APP_API_URL;

        const fetchData = async () => {
            try {
                const [storyRes, comicRes, chaptersRes] = await Promise.all([
                    axios.get(`${API_URL}/chapters/${slug}/${chapter}`),
                    axios.get(`${API_URL}/comics/detail/${slug}`),
                    axios.get(`${API_URL}/chapters/${slug}`), // API lấy danh sách chương
                ]);

                setStory(storyRes.data);
                setComic(comicRes.data);

                // Lấy danh sách số chương từ API và sắp xếp tăng dần
                const chapters = chaptersRes.data
                    .map((chap) => chap.number)
                    .sort((a, b) => a - b);

                // Tìm vị trí của chương hiện tại
                const currentIndex = chapters.indexOf(Number(chapter)); // Ép kiểu để tránh lỗi so sánh

                // Xác định chương trước và sau
                setPrevChapter(
                    currentIndex > 0 ? chapters[currentIndex - 1] : null
                );
                setNextChapter(
                    currentIndex < chapters.length - 1
                        ? chapters[currentIndex + 1]
                        : null
                );
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
        };

        fetchData();
    }, [slug, chapter]);

    // Thêm useEffect này để cuộn lên đầu trang khi chương thay đổi
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [chapter]);

    return (
        <div className={cx('story-container', 'bg-black')}>
            <div className={cx('box')}>
                <span className={cx('bread-crumb')}>
                    <Breadcrumb />
                </span>
                <div className={cx('comic-title')}>
                    <h2>
                        {comic.title} - Chương {story.number}
                    </h2>
                    <time dateTime={story.updatedAt}>
                        (Cập nhật lúc: {dateAPIHandle(story.updatedAt)})
                    </time>
                </div>
                <div className={cx('story-control')}>
                    <div className={cx('mt-3')}>
                        <span className={cx('note-server')}>
                            Nếu không xem được truyện vui lòng đổi "SERVER HÌNH"
                            bên dưới
                        </span>
                        <div
                            className={cx(
                                'mt-3',
                                'd-flex',
                                'justify-content-center'
                            )}
                        >
                            <Link
                                to="#"
                                className={cx('btn', 'btn--green-color')}
                            >
                                Server 1
                            </Link>
                            <Link
                                to="#"
                                className={cx('btn', 'btn--blue-color')}
                            >
                                Server VIP
                            </Link>
                        </div>
                    </div>
                    <div
                        className={cx(
                            'mt-3',
                            'd-flex',
                            'justify-content-center',
                            'align-items-center'
                        )}
                    >
                        <Link className={cx('btn', 'btn--orange-color')}>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            Báo Lỗi Chương
                        </Link>
                    </div>
                    <div className={cx('mt-3', 'alert')}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <em>
                            Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển
                            chapter
                        </em>
                    </div>
                    <div
                        className={cx(
                            'mt-3',
                            'd-flex',
                            'justify-content-center',
                            'align-items-center',
                            'redirect-btn'
                        )}
                    >
                        {/* Nút Chap trước */}
                        {prevChapter !== null ? (
                            <Link
                                to={`/comics/detail/${slug}/${prevChapter}`}
                                className={cx('btn', 'btn--sm-blue-color')}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                {' Chap trước'}
                            </Link>
                        ) : (
                            <button
                                className={cx(
                                    'btn',
                                    'btn--sm-blue-color',
                                    'd-none'
                                )}
                                disabled
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                {' Chap trước'}
                            </button>
                        )}

                        {/* Nút Chap sau */}
                        {nextChapter !== null ? (
                            <Link
                                to={`/comics/detail/${slug}/${nextChapter}`}
                                className={cx('btn', 'btn--sm-blue-color')}
                            >
                                {' Chap sau'}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        ) : (
                            <button
                                className={cx(
                                    'btn',
                                    'btn--sm-blue-color',
                                    'd-none'
                                )}
                                disabled
                            >
                                {' Chap sau'}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('list-img')}>
                {story?.images?.length > 0 ? (
                    story.images.map((img, ind) => (
                        <div key={ind} className={cx('item-img')}>
                            <img src={img} alt={`Trang ${ind + 1}`} />
                        </div>
                    ))
                ) : (
                    <p>Không có hình ảnh</p>
                )}
                {/* {story?.images?.length > 0 ? (
                    story.images.toReversed().map((img, ind) => (
                        <div key={ind} className={cx('item-img')}>
                            <img src={img} alt={`Trang ${ind + 1}`} />
                        </div>
                    ))
                ) : (
                    <p>Không có hình ảnh</p>
                )} */}
            </div>

            <div className={cx('box')}>
                <div
                    className={cx(
                        'mt-3',
                        'd-flex',
                        'justify-content-center',
                        'align-items-center',
                        'redirect-btn'
                    )}
                >
                    {/* Nút Chap trước */}
                    {prevChapter !== null ? (
                        <Link
                            to={`/comics/detail/${slug}/${prevChapter}`}
                            className={cx('btn', 'btn--sm-blue-color')}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            {' Chap trước'}
                        </Link>
                    ) : (
                        <button
                            className={cx(
                                'btn',
                                'btn--sm-blue-color',
                                'd-none'
                            )}
                            disabled
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            {' Chap trước'}
                        </button>
                    )}

                    {/* Nút Chap sau */}
                    {nextChapter !== null ? (
                        <Link
                            to={`/comics/detail/${slug}/${nextChapter}`}
                            className={cx('btn', 'btn--sm-blue-color')}
                        >
                            {' Chap sau'}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    ) : (
                        <button
                            className={cx(
                                'btn',
                                'btn--sm-blue-color',
                                'd-none'
                            )}
                            disabled
                        >
                            {' Chap sau'}
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    )}
                </div>

                <span className={cx('bread-crumb')}>
                    <Breadcrumb />
                </span>
            </div>

            <Comment />
        </div>
    );
}

export default ReadChapter;
