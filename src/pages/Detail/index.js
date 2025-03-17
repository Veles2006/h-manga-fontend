import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../../components/Breadcrumb';
import Comment from '../../components/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faComment,
    faComments,
    faDatabase,
    faEye,
    faHeart,
    faInfoCircle,
    faPlus,
    faRss,
    faThumbsUp,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

const ICONS = {
    anotherTitle: faPlus,
    author: faUser,
    status: faRss,
    likes: faThumbsUp,
    follows: faHeart,
    views: faEye,
};

const COMIC_DETAILS = [
    { key: 'anotherTitle', label: 'Tên khác' },
    { key: 'author', label: 'Tác giả' },
    {
        key: 'status',
        label: 'Tình trạng',
        format: (val) => (val === 'ongoing' ? 'Đang tiến hành' : 'Hoàn thành'),
    },
    { key: 'likes', label: 'Lượt thích' },
    { key: 'follows', label: 'Lượt theo' },
    { key: 'views', label: 'Lượt xem' },
];

function Detail() {
    const [comic, setComic] = useState({});
    const [chapters, setChapters] = useState([]);
    const [minNumber, setMinNumber] = useState(0);
    const { slug } = useParams();

    const MENU_ITEMS = [
        {
            icon: faBook,
            text: 'Đọc từ đầu',
            class: 'menu-btn--green-bg',
            link: `/comics/detail/${slug}/${minNumber}`,
        },
        { icon: faHeart, text: 'Theo dõi', class: 'menu-btn--danger-bg', link: '#' },
        { icon: faThumbsUp, text: 'Thích', class: 'menu-btn--violet-bg', link: '#' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [comicRes, chaptersRes] = await Promise.all([
                    axios.get(`http://localhost:5000/comics/detail/${slug}`),
                    axios.get(`http://localhost:5000/chapters/${slug}`),
                ]);

                setComic(comicRes.data);
                setChapters(chaptersRes.data);

                // Tìm số chương nhỏ nhất
                setMinNumber(
                    chaptersRes.data.length > 0
                        ? chaptersRes.data.reduce(
                              (min, chap) => Math.min(min, chap.number),
                              Infinity
                          )
                        : null
                );
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        };

        fetchData();
    }, [slug]);

    if (!comic || Object.keys(comic).length === 0) return <p>Đang tải...</p>;

    return (
        <div className={cx('detail-page')}>
            <div className={cx('main-content-wrapper')}>
                <Breadcrumb title={comic.title} />
                <div className={cx('main-content')}>
                    <div className={cx('comic-info')}>
                        <div className={cx('thumbnail')}>
                            <img src={comic.coverImage} alt="Comic thumbnail" />
                        </div>

                        <div className={cx('info-content')}>
                            <h2>{comic.title}</h2>
                            <ul>
                                {COMIC_DETAILS.map(({ key, label, format }) => (
                                    <li className={cx('row')} key={key}>
                                        <p
                                            className={cx(
                                                'col-lg-2',
                                                'p-0',
                                                'm-0'
                                            )}
                                        >
                                            <FontAwesomeIcon
                                                icon={ICONS[key]}
                                            />
                                            {label}
                                        </p>
                                        {key === 'anotherTitle' ? (
                                            <h3
                                                className={cx(
                                                    'col-lg-10',
                                                    'p-0',
                                                    'm-0'
                                                )}
                                            >
                                                {comic[key]}
                                            </h3>
                                        ) : key === 'author' ? (
                                            <Link
                                                className={cx(
                                                    'col-lg-10',
                                                    'p-0',
                                                    'm-0'
                                                )}
                                                to="#"
                                            >
                                                {comic[key]}
                                            </Link>
                                        ) : (
                                            <p
                                                className={cx(
                                                    'col-lg-10',
                                                    'p-0',
                                                    'm-0'
                                                )}
                                            >
                                                {format
                                                    ? format(comic[key])
                                                    : comic[key]}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <ul className={cx('categories-list')}>
                                {comic?.categories?.map((category, ind) => (
                                    <li key={ind}>
                                        <Link to="#">{category}</Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className={cx('comic-menu')}>
                                {MENU_ITEMS.map((item, ind) => (
                                    <li key={ind}>
                                        <Link
                                            to={item.link}
                                            className={cx(
                                                'menu-btn',
                                                `${item.class}`
                                            )}
                                        >
                                            <FontAwesomeIcon icon={item.icon} />
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <h3 className={cx('main-content__title')}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Giới thiệu
                    </h3>
                    <div className={cx('comic-des')}>
                        <p>{comic.description}</p>
                    </div>
                    <h3 className={cx('main-content__title')}>
                        <FontAwesomeIcon icon={faDatabase} />
                        Danh sách chương
                    </h3>
                    <div className={cx('list-chapter', 'row')}>
                        {chapters.map((chapter) => (
                            <div
                                className={cx('list-chapter__item')}
                                key={chapter.id}
                            >
                                <div className={cx('col-lg-10')}>
                                    <Link
                                        to={`/comics/detail/${slug}/${chapter.number}`}
                                    >
                                        Chương {chapter.number}
                                    </Link>
                                </div>
                                <div className={cx('col-lg-2')}>
                                    {chapter.updatedAt}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Comment detail={true} />
        </div>
    );
}

export default Detail;
