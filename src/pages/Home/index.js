import className from 'classnames/bind';

import style from './Home.module.scss'
import ComicCarousel from './ComicCarousel';
import MainContentHome from './MainContentHome';

const cx = className.bind(style)

function Home() {
    return (
        <div className={cx('home-page')}>
            <ComicCarousel />
            <MainContentHome />
        </div>
    );
}

export default Home;

