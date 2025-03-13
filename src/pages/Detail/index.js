import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../../components/Breadcrumb';
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
import { LoremIpsum } from 'lorem-ipsum';

import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

const lorem = new LoremIpsum();

const ICONS = {
    anotherTitle: faPlus,
    author: faUser,
    status: faRss,
    likes: faThumbsUp,
    follows: faHeart,
    views: faEye,
};

const MENU_ITEMS = [
    { icon: faBook, text: 'Đọc từ đầu', class: 'menu-btn--green-bg' },
    { icon: faHeart, text: 'Theo dõi', class: 'menu-btn--danger-bg' },
    { icon: faThumbsUp, text: 'Thích', class: 'menu-btn--violet-bg' },
];

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
    const { slug } = useParams();
    const [expanded, setExpanded] = useState(false);
    const [showMoreButton, setShowMoreButton] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            // Kiểm tra xem nội dung có dài hơn 5 dòng không
            setShowMoreButton(
                contentRef.current.scrollHeight >
                    contentRef.current.clientHeight
            );
        }
    }, []);

    useEffect(() => {
        const fetchComic = async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:5000/comics/detail/${slug}`
                );
                setComic(data);
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        };
        const fetchChapters = async () => {
            try {
                const { data } = await axios.get(
                    `http://localhost:5000/chapters/${slug}`
                );
                setChapters(data);
            } catch (error) {
                console.error('Có lỗi xảy ra:', error);
            }
        };
        fetchComic();
        fetchChapters();
    }, [slug]);

    if (!comic) return <p>Đang tải...</p>;

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
                                            to="#"
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
                        {chapters.map((chapter, ind) => (
                            <div className={cx('list-chapter__item')} key={ind}>
                                <div className={cx('col-lg-10')}>
                                    <Link to="#">Chương {chapter.number}</Link>
                                </div>
                                <div className={cx('col-lg-2')}>
                                    {chapter.updatedAt}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('comment-container')}>
                        <span className={cx('comment-container__title')}>
                            <FontAwesomeIcon icon={faComments} />
                            Bình Luận (485)
                        </span>
                        <div className={cx('notify-fanpage')}>
                            {'Vào '}
                            <Link to="#">Fanpage</Link>
                            {' like và theo dõi để ủng hộ TruyenQQ nhé.'}
                        </div>
                        <div className={cx('comment-placeholder')}>
                            hãy bình luận có văn hóa để tránh bị khóa tài khoản
                        </div>
                        <div className={cx('comment-list')}>
                            <article className={cx('comment-item-wrapper')}>
                                <div className={cx('comment-item')}>
                                    <figure className={cx('avartar-comment')}>
                                        <img
                                            src="https://i.pinimg.com/736x/1f/18/53/1f1853c48f5090ddf75dd1948b939577.jpg"
                                            alt="Linh Nhi"
                                        />
                                    </figure>
                                    <div className={cx('comment-item-content')}>
                                        <div
                                            className={cx(
                                                'comment-content-wrapper'
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'comment-content-title',
                                                    'level_6'
                                                )}
                                            >
                                                <strong>Linh Nhi</strong>
                                                <span>Luyện Hư</span>
                                            </div>
                                            <div
                                                className={cx(
                                                    'comment-main-content'
                                                )}
                                            >
                                                Hay
                                            </div>
                                        </div>
                                        <div
                                            className={cx(
                                                'comment-item-action'
                                            )}
                                        >
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                />
                                                <span>Thích</span>
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faComment}
                                                />
                                                <span>Trả lời</span>
                                            </span>
                                            <span>4 Ngày Trước</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className={cx('comment-item-wrapper')}>
                                <div className={cx('comment-item')}>
                                    <figure className={cx('avartar-comment')}>
                                        <img
                                            src="https://i.pinimg.com/736x/1f/18/53/1f1853c48f5090ddf75dd1948b939577.jpg"
                                            alt="Linh Nhi"
                                        />
                                    </figure>
                                    <div className={cx('comment-item-content')}>
                                        <div
                                            className={cx(
                                                'comment-content-wrapper'
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'comment-content-title',
                                                    'level_6'
                                                )}
                                            >
                                                <strong>Linh Nhi</strong>
                                                <span>Luyện Hư</span>
                                            </div>
                                            <div
                                                ref={contentRef}
                                                className={cx(
                                                    'comment-main-content',
                                                    { expanded }
                                                )}
                                                style={
                                                    expanded
                                                        ? {
                                                              WebkitLineClamp:
                                                                  'unset',
                                                          }
                                                        : {}
                                                }
                                            >
                                                {lorem.generateSentences(20)}
                                            </div>
                                            {showMoreButton && (
                                                <div className={cx('show-more-btn-wrapper')}>
                                                    <button
                                                        onClick={() =>
                                                            setExpanded(!expanded)
                                                        }
                                                        className={cx(
                                                            'show-more-btn'
                                                        )}
                                                    >
                                                        {expanded
                                                            ? 'Ẩn bớt'
                                                            : 'Xem thêm'}
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className={cx(
                                                'comment-item-action'
                                            )}
                                        >
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                />
                                                <span>Thích</span>
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faComment}
                                                />
                                                <span>Trả lời</span>
                                            </span>
                                            <span>4 Ngày Trước</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className={cx('comment-item-wrapper')}>
                                <div className={cx('comment-item')}>
                                    <figure className={cx('avartar-comment')}>
                                        <img
                                            src="https://i.pinimg.com/736x/1f/18/53/1f1853c48f5090ddf75dd1948b939577.jpg"
                                            alt="Linh Nhi"
                                        />
                                    </figure>
                                    <div className={cx('comment-item-content')}>
                                        <div
                                            className={cx(
                                                'comment-content-wrapper'
                                            )}
                                        >
                                            <div
                                                className={cx(
                                                    'comment-content-title',
                                                    'level_6'
                                                )}
                                            >
                                                <strong>Linh Nhi</strong>
                                                <span>Luyện Hư</span>
                                            </div>
                                            <div
                                                className={cx(
                                                    'comment-main-content'
                                                )}
                                            >
                                                Hay
                                            </div>
                                        </div>
                                        <div
                                            className={cx(
                                                'comment-item-action'
                                            )}
                                        >
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                />
                                                <span>Thích</span>
                                            </span>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faComment}
                                                />
                                                <span>Trả lời</span>
                                            </span>
                                            <span>4 Ngày Trước</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className={cx('page-redirect')}>
                            <p className={cx('active')}>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
