import className from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = className.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('div-middle')}>
                <div className={cx('left-footer')}>
                    <div className={cx('left-footer-logo')}>
                        <img
                            src="/img/logo-h-manga.png"
                            alt="Logo"
                            className={cx('left-footer-logo__img')}
                        />
                        <img
                            src="/img/h_manga_logo_final_black-removebg-preview.png"
                            alt="Logo-title"
                            className={cx('left-footer-logo__title')}
                        />
                    </div>
                    <div className={cx('left-footer-content')}>

                    </div>
                </div>
                <div className={cx('right-footer')}>
                    <div className={cx('link-list')}>
                        <div className={cx('link-item')}>htpps://Shop</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
