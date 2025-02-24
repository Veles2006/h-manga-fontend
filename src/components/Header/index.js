import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCaretDown,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
const cx = classNames.bind(styles);

const barValues = [
    {
        name: 'Trang chủ',
    },
    {
        name: 'Thể loại',
        icon: faCaretDown,
    },
    {
        name: 'Xếp hạng',
        icon: faCaretDown,
    },
    {
        name: 'Con gái',
    },
    {
        name: 'Con trai',
    },
    {
        name: 'Tìm truyện',
    },
    {
        name: 'Lịch sử',
    },
    {
        name: 'Theo dõi',
    },
    {
        name: 'Thảo luận',
    },
];

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-top')}>
                <div className={cx('header-div-middle')}>
                    <div className={cx('header-top-right')}>
                        <div className={cx('header-logo')}>
                            <img
                                className={cx('header-logo__img')}
                                src="/img/logo-h-manga.png"
                                alt="Logo"
                            />
                            <img
                                className={cx('header-logo__title')}
                                src="/img/h_manga_logo_final_black-removebg-preview.png"
                                alt="Logo-title"
                            />
                        </div>
                        <div className={cx('toggle-theme')}>
                            <FontAwesomeIcon
                                icon={faLightbulb}
                                className={cx('toggle-theme__icon')}
                            />
                        </div>
                        <div className={cx('search-box')}>
                            <input
                                type="text"
                                className={cx('search-input')}
                                id="search-input"
                                placeholder="Bạn muốn tìm truyện gì"
                            />
                            <button
                                className={cx(
                                    'search-btn',
                                    'btn',
                                    'btn-outline-primary'
                                )}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>

                    <div className={cx('header-top-left')}>
                        <div className={cx('notification')}>
                            <FontAwesomeIcon icon={faBell} />
                        </div>
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
            <div className={cx('header-bottom')}>
                <div className={cx('header-div-middle')}>
                    <ul className={cx('bar')}>
                        {barValues.map((value, index) => {
                            return (
                                <li key={index} className={cx('bar-item')}>
                                    <a className={cx('bar-item__link')} href='/'>
                                        {value.name}
                                        {value.icon ? (
                                            <FontAwesomeIcon
                                                icon={value.icon}
                                            />
                                        ) : null}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
