import classNames from 'classnames/bind';
import styles from './Interest.module.scss';
import { data, Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const favoritesList = [
    { img: '/img/Fire.png', desc: 'Action' },
    { img: '/img/Heart.png', desc: 'Romance' },
    { img: '/img/Sneezing.png', desc: 'Darama' },
    { img: '/img/Screaming.png', desc: 'Horror' },
    { img: '/img/Unicorn.png', desc: 'Fantasy' },
    { img: '/img/Camera.png', desc: 'Mistery' },
    { img: '/img/Crystal-ball.png', desc: 'Magic' },
    { img: '/img/Laugh.png', desc: 'Comedy' },
    { img: '/img/Calendar.png', desc: 'Daily life' },
];

function Interest() {
    const handleChooseFavorite = (e) => {
        e.currentTarget.classList.toggle(cx('favorite-title-item-wrapper--active'));
    };

    return (
        <div className={cx('page-wrapper')}>
            <div className={cx('page-desc')}>
                <h1>Let Us Know</h1>
                <p>
                    Choose your genre to find
                    <br />
                    favorite titles here!
                </p>
            </div>
            <div className={cx('favorite-title-list')}>
                <div className={cx('row g-0')}>
                    {favoritesList.map((favorite, index) => (
                        <div
                            key={index}
                            className={cx(
                                'col-4 d-flex justify-content-center align-items-center mb-5'
                            )}
                        >
                            <div
                                className={cx('favorite-title-item-wrapper')}
                                onClick={handleChooseFavorite}
                            >
                                <div className={cx('favorite-title-item__img')}>
                                    <img
                                        src={favorite.img}
                                        alt={favorite.desc}
                                    />
                                </div>
                                <span
                                    className={cx('favorite-title-item__desc')}
                                >
                                    {favorite.desc}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className={cx('favorite-button')}>Continue</button>
            <Link className={cx('favorite-skip-link')} to="/">
                Skip for now
            </Link>
        </div>
    );
}

export default Interest;
