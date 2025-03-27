import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SearchResultsBox.module.scss';

const cx = classNames.bind(styles);

function SearchResultsBox({ results, inputWidth }) {
    return (
        <div
            style={{ width: `${inputWidth}px` }}
            className={cx('search-results-box', {
                'd-none': results.length === 0,
            })}
        >
            <ul className={cx('result-list')}>
                {results.map((comic) => (
                    <li key={comic._id} className={cx('result-item')}>
                        <Link to={`/comics/detail/${comic.slug}`}>
                            <div className={cx('img-box')}>
                                <img
                                    src={comic.coverImage}
                                    alt="Comic thumbnail"
                                />
                            </div>

                            <div className={cx('comic-info')}>
                                <h3>{comic.title}</h3>

                                <h4>{comic.anotherTitle}</h4>

                                <p>
                                    <Link
                                        to={`/comics/detail/${comic.slug}/${comic.lastChapterNumber}`}
                                    >
                                        Chapter {comic.lastChapterNumber}
                                    </Link>
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResultsBox;
