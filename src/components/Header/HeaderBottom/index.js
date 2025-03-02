import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './HeaderBottom.module.scss';
import DropdownMenu from '../DropdownMenu';

const cx = classNames.bind(styles);

const NAV_ITEMS = [
    { name: 'Trang chủ' },
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
    'Top Ngày', 'Top Tuần', 'Top Tháng', 'Yêu Thích', 'Mới cập nhật',
    'Truyện mới', 'Truyện full', 'Truyện ngẫu nhiên'
];


function HeaderBottom({ categories }) {
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <div className={cx('header-bottom')}>
            <div className={cx('header-div-middle')}>
                <ul className={cx('bar')}>
                    {NAV_ITEMS.map((item, index) => (
                        <li key={index} className={cx('bar-item')}
                            onMouseEnter={() => setActiveMenu(item.name)}
                            onMouseLeave={() => setActiveMenu(null)}>
                            {item.icon ? (
                                <p className={cx('bar-item__link')}>
                                    {item.name} <FontAwesomeIcon icon={item.icon} />
                                </p>
                            ) : (
                                <a className={cx('bar-item__link')} href="/">{item.name}</a>
                            )}
                            
                            {item.name === 'Thể loại' && activeMenu === 'Thể loại' && (
                                <DropdownMenu items={categories} className="categories-list" />
                            )}
                            {item.name === 'Xếp hạng' && activeMenu === 'Xếp hạng' && (
                                <DropdownMenu items={RANKING_ITEMS} className="ranking-list" />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HeaderBottom;