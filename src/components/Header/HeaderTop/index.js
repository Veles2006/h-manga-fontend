import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <div className={cx('header-top')}>
            <div className={cx('header-div-middle', 'container')}>
                <div className={cx('header-top-right')}>
                    <div className={cx('header-logo')}>
                        <Link className={cx('d-md-flex')} to='/'>
                            <img src="/img/logo-h-manga.png" alt="Logo" className={cx('header-logo__img')} />
                            <img src="/img/h_manga_logo_final_black-removebg-preview.png" alt="Logo-title" className={cx('header-logo__title', 'd-none', 'd-md-block')} />
                        </Link>
                    </div>
                    <div className={cx('toggle-theme')}>
                        <FontAwesomeIcon icon={faLightbulb} className={cx('toggle-theme__icon')} />
                    </div>
                    <div className={cx('search-box', 'd-sm-none', 'd-md-none', 'd-none')}>
                        <input type="text" className={cx('search-input')} placeholder="Bạn muốn tìm truyện gì" />
                        <button className={cx('search-btn', 'btn', 'btn-outline-primary')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('header-top-left')}>
                    <div className={cx('notification')}>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className={cx('user-account')}>
                        <img className={cx('user-account__img')} src="/img/avatar.jpg" alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>
    );;
}

export default HeaderTop;