import classNames from 'classnames/bind';
import styles from './DropdownMenu.module.scss';

const cx = classNames.bind(styles);

function DropdownMenu({ items }) {
    return (
        <div className={cx('dropdown')}>
            <ul className={cx('dropdown-list')}>
                {items.map((item, idx) => (
                    <li key={idx} className={cx('dropdown-item')}>
                        <a href="/">{item.title || item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DropdownMenu;
