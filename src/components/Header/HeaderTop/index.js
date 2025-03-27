import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faMagnifyingGlass,
    faClock,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useCallback, useEffect } from 'react';

import styles from './HeaderTop.module.scss';
import SearchBox from './SearchBox';
import useDebounce from '../../../hooks/useDebounce';

const cx = classNames.bind(styles);

const messagesData = [
    { id: 1, name: 'Linh Nhi', timeAgo: '2 Ngày Trước' },
    { id: 2, name: 'Minh Tuấn', timeAgo: '3 Ngày Trước' },
    { id: 3, name: 'Tuấn Anh', timeAgo: '5 Ngày Trước' },
];

function NotificationBox({ isVisible }) {
    return (
        <div
            className={cx('notification-box', {
                'd-block': isVisible,
                'd-none': !isVisible,
            })}
        >
            <ul className={cx('notification-list')}>
                {messagesData.map((mess) => (
                    <li key={mess.id} className={cx('notification-item')}>
                        <Link to="#">
                            <h3>{mess.name} vừa trả lời bình luận của bạn</h3>
                            <p>
                                <FontAwesomeIcon icon={faClock} />{' '}
                                {mess.timeAgo}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function HeaderTop() {
    const [showNotification, setShowNotification] = useState(false);
    const [showSearchMobile, setShowSearchMobile] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const debouncedQuery = useDebounce(query, 300);

    const toggleNotification = useCallback(
        () => setShowNotification((prev) => !prev),
        []
    );
    const toggleSearchMobile = useCallback(
        () => setShowSearchMobile((prev) => !prev),
        []
    );

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (debouncedQuery.length < 2) {
            setResults([]);
            return;
        }

        axios
            .get(`${API_URL}/comics/search?q=${debouncedQuery}`)
            .then(({ data }) => {
                setResults(data.comics);
            })
            .catch((error) => console.error('Có lỗi xảy ra:', error));
    }, [debouncedQuery]);

    return (
        <>
            <div className={cx('header-top')}>
                <div className={cx('header-div-middle', 'container')}>
                    <div className={cx('header-top-right')}>
                        <div className={cx('header-logo')}>
                            <Link className={cx('d-md-flex')} to="/">
                                <img
                                    src="/img/logo-h-manga.png"
                                    alt="Logo"
                                    className={cx('header-logo__img')}
                                />
                                <img
                                    src="/img/h_manga_logo_final_black-removebg-preview.png"
                                    alt="Logo-title"
                                    className={cx(
                                        'header-logo__title',
                                        'd-none',
                                        'd-md-block'
                                    )}
                                />
                            </Link>
                        </div>
                        <div className={cx('toggle-theme')}>
                            <FontAwesomeIcon
                                icon={faLightbulb}
                                className={cx('toggle-theme__icon')}
                            />
                        </div>

                        {/* Search trên Desktop (luôn hiển thị) */}
                        <div
                            className={cx(
                                'search-box',
                                'd-none',
                                'd-sm-flex',
                                'd-md-flex'
                            )}
                        >
                            <SearchBox
                                isVisible={true}
                                isMobile={false}
                                query={query}
                                setQuery={setQuery}
                                results={results}
                            />
                        </div>
                    </div>

                    <div className={cx('header-top-left')}>
                        {/* Nút bật tìm kiếm Mobile */}
                        <div
                            className={cx(
                                'search-btn',
                                'd-flex',
                                'd-sm-none',
                                'd-md-none'
                            )}
                            onClick={toggleSearchMobile}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>

                        {/* Nút bật/tắt thông báo */}
                        <div
                            onClick={toggleNotification}
                            className={cx('notification-btn')}
                        >
                            <FontAwesomeIcon icon={faBell} />
                        </div>

                        {/* Hộp thông báo */}
                        <NotificationBox isVisible={showNotification} />

                        {/* Ảnh avatar tài khoản */}
                        <div className={cx('user-account')}>
                            <img
                                className={cx('user-account__img')}
                                src="/img/avatar.jpg"
                                alt="Avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Thanh tìm kiếm Mobile */}
            <div
                className={cx('container', 'd-block', 'd-sm-none', {
                    'd-block': showSearchMobile,
                    'd-none': !showSearchMobile,
                })}
            >
                <SearchBox
                    isVisible={showSearchMobile}
                    isMobile={true}
                    query={query}
                    setQuery={setQuery}
                    results={results}
                />
            </div>
        </>
    );
}

export default HeaderTop;
