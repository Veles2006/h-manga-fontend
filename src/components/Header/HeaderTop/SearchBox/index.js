import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchBox.module.scss';
import SearchResultsBox from '../SearchResultsBox';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchBox({ isVisible, isMobile, query, setQuery, results }) {
    const inputRefDesktop = useRef(null);
    const inputRefMobile = useRef(null);
    const boxRef = useRef(null);
    const location = useLocation();
    const [inputWidth, setInputWidth] = useState(0);

    // Xử lý chiều dài của search results box
    useEffect(() => {
        const currentRef = isMobile
            ? inputRefMobile.current
            : inputRefDesktop.current;
        if (!currentRef) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setInputWidth(`${entry.contentRect.width + 70}`);
            }
        });

        observer.observe(currentRef);

        // đo lần đầu
        setInputWidth(currentRef.getBoundingClientRect().width);

        return () => {
            observer.disconnect();
        };
    }, [isMobile]); // ← mỗi khi isMobile đổi, observer chuyển sang ref mới

    // Xử lý khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                setQuery('');
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    // Đóng khi chuyển route (ví dụ bấm vào <Link>)
    useEffect(() => {
        setQuery('');
    }, [location.pathname]);

    return (
        <div
            ref={boxRef}
            className={cx('search-box', {
                'search-box-mobile': isMobile,
                'd-block': isVisible,
                'd-none': !isVisible,
            })}
        >
            {isMobile ? (
                <input
                    ref={inputRefMobile}
                    type="text"
                    className={cx('search-input')}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Bạn muốn tìm truyện gì?"
                />
            ) : (
                <input
                    ref={inputRefDesktop}
                    type="text"
                    className={cx('search-input')}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Bạn muốn tìm truyện gì?"
                />
            )}

            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

            {/* Các kết quả tìm kiếm */}
            <SearchResultsBox results={results} inputWidth={inputWidth} />
        </div>
    );
}

export default SearchBox;
