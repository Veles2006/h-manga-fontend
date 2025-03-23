import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faList, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderBottom.module.scss';
import DropdownMenu from '../DropdownMenu';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NAV_ITEMS = [
    { name: 'Thể loại', icon: faCaretDown },
    { name: 'Xếp hạng', icon: faCaretDown },
    { name: 'Con gái' },
    { name: 'Con trai' },
    { name: 'Tìm truyện' },
    { name: 'Lịch sử' },
    { name: 'Theo dõi' },
    { name: 'Thảo luận' },
];

const RANKING_ITEMS = [
    'Top Ngày',
    'Top Tuần',
    'Top Tháng',
    'Yêu Thích',
    'Mới cập nhật',
    'Truyện mới',
    'Truyện full',
    'Truyện ngẫu nhiên',
];

function HeaderBottom({ categories }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [openMenus, setOpenMenus] = useState([]); // Lưu danh sách menu đang mở
    const [toggleBar, setToggleBar] = useState(false);

    // Cập nhật khi thay đổi kích thước màn hình
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setOpenMenus([]); // Reset khi lên desktop
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleMenu = (menuName) => {
        setOpenMenus((prev) =>
            prev.includes(menuName)
                ? prev.filter((m) => m !== menuName)
                : [...prev, menuName]
        );
    };

    

    return (
        <div className={cx('header-bottom')}>
            <div className={cx('header-div-middle', 'container')}>
                <ul className={cx('bar')}>
                    <li className={cx('bar-item')}>
                        <Link className={cx('bar-item__link')} to="#">
                            Trang chủ
                        </Link>
                    </li>
                    {NAV_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={isMobile ? (toggleBar ? cx('bar-item', 'd-block') : cx('bar-item', 'd-none')) : cx('bar-item')}
                            onMouseEnter={() =>
                                !isMobile && setActiveMenu(item.name)
                            }
                            onMouseLeave={() =>
                                !isMobile && setActiveMenu(null)
                            }
                            onClick={() =>
                                isMobile && handleToggleMenu(item.name)
                            }
                        >
                            {item.icon ? (
                                <p className={cx('bar-item__link')}>
                                    {item.name}{' '}
                                    <FontAwesomeIcon icon={item.icon} />
                                </p>
                            ) : (
                                <a className={cx('bar-item__link')} href="/">
                                    {item.name}
                                </a>
                            )}

                            {item.name === 'Thể loại' &&
                                (activeMenu === 'Thể loại' ||
                                    openMenus.includes('Thể loại')) && (
                                    <DropdownMenu items={categories} />
                                )}
                            {item.name === 'Xếp hạng' &&
                                (activeMenu === 'Xếp hạng' ||
                                    openMenus.includes('Xếp hạng')) && (
                                    <DropdownMenu items={RANKING_ITEMS} />
                                )}
                        </li>
                    ))}
                    <button
                        className={cx('bar-btn', 'd-md-none', 'd-md-block')}
                        onClick={() => setToggleBar(!toggleBar)}
                    >
                        <div className={toggleBar ? cx('d-none') : cx('d-block')}><FontAwesomeIcon icon={faList} /></div>
                        <div className={toggleBar ? cx('d-block', 'bar-btn__icon') : cx('d-none')}><FontAwesomeIcon icon={faXmark} /></div>
                    </button>
                </ul>
                <div className={cx('categories-list', 'd-none', 'd-md-block')}>
                    {activeMenu === 'Thể loại' && (
                        <DropdownMenu items={categories} />
                    )}
                </div>
                <div className={cx('categories-list', 'd-none', 'd-md-block')}>
                    {activeMenu === 'Xếp hạng' && (
                        <DropdownMenu
                            items={RANKING_ITEMS}
                            className={cx('ranking-list')}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;
