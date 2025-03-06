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
                        <div className={cx('left-footer-content__logo')}>
                            <img src="/img/logo-h-manga.jpg" alt="logo" />
                            <div className={cx('left-footer-content__title')}>
                                <h3>Hmanga</h3>
                                <span>9.319 người theo dõi</span>
                            </div>
                        </div>
                        <div className={cx('left-footer-content__btn')}>
                            <div className={cx('follow')}>Theo dõi trang</div>
                            <div className={cx('share')}>Chia sẻ</div>
                        </div>
                    </div>
                </div>
                <div className={cx('right-footer')}>
                    <ul className={cx('link-list')}>
                        {Array(20)
                            .fill()
                            .map((_, index) => (
                                <li key={index} className={cx('link-item')}>
                                    <a href="/">https://Shop{index + 1}</a>
                                </li>
                            ))}
                    </ul>
                    <span>Email: cskh.truyenqq@gmail.com</span>
                    <span>Chính Sách Bảo Mật</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
