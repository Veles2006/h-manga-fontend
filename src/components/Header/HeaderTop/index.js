import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import styles from './HeaderTop.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function HeaderTop() {
    const messagesData = [
        {
            id: 1,
            name: 'Linh Nhi',
            content:
                'Truyện này cuốn thật sự! Tình tiết hấp dẫn, mỗi chap lại có một cú twist bất ngờ. Tác giả xây dựng nhân vật rất có chiều sâu, đặc biệt là nhân vật phản diện. Art cũng rất đẹp, nét vẽ ngày càng tiến bộ qua từng chương. Không biết mấy chap sau sẽ ra sao, nhưng mình rất mong chờ trận chiến sắp tới. Hi vọng tác giả không buff quá đà, giữ cốt truyện hợp lý là được!',
            timeAgo: '2 Ngày Trước',
        },
        {
            id: 2,
            name: 'Minh Tuấn',
            content:
                'Mình đã theo dõi bộ truyện này từ những chương đầu tiên và thực sự rất ấn tượng với cách tác giả xây dựng cốt truyện. Ban đầu, mọi thứ có vẻ khá đơn giản, nhưng càng về sau, sự phát triển của nhân vật chính cùng những bí ẩn xung quanh thế giới trong truyện khiến mình không thể rời mắt. Điều làm mình thích nhất ở bộ này chính là hệ thống tu luyện được thiết kế rất chặt chẽ, không có những màn buff sức mạnh vô lý, tất cả đều có sự hợp lý nhất định. \n\nMột điểm cộng lớn nữa là các nhân vật phụ trong truyện không bị xây dựng một cách hời hợt. Mỗi nhân vật đều có câu chuyện riêng, có động lực riêng và không ai bị lãng quên dù chỉ xuất hiện trong một vài chương. Điều này tạo ra một thế giới sống động, chân thực, nơi mà mỗi hành động của nhân vật đều có ý nghĩa và tác động đến cốt truyện. \n\nVề phần hình ảnh, art truyện ngày càng đẹp hơn qua từng chương. Ban đầu có thể chưa thực sự quá xuất sắc, nhưng càng về sau, nét vẽ càng chi tiết, biểu cảm nhân vật cũng rất sống động, giúp người đọc cảm nhận được sự căng thẳng, kịch tính trong từng tình huống. Mình đặc biệt thích những cảnh chiến đấu trong truyện, từ cách mô tả kỹ năng cho đến diễn biến trận đấu, tất cả đều rất mượt mà, không bị nhàm chán hay quá dài dòng. \n\nBên cạnh đó, yếu tố hài hước trong truyện cũng được khai thác rất tốt. Những màn đối đáp giữa các nhân vật, những tình huống tréo ngoe mà main gặp phải khiến mình không nhịn được cười. Tuy nhiên, truyện vẫn giữ được sự cân bằng giữa hài hước và kịch tính, không bị lố hoặc làm giảm đi sự nghiêm túc của cốt truyện chính. \n\nTuy nhiên, nếu phải nói một điểm chưa hài lòng thì có lẽ là tốc độ ra chương hơi chậm so với sự mong đợi của mình. Vì quá cuốn nên tuần nào mình cũng hóng chương mới, nhưng đôi lúc lại phải chờ hơi lâu. Dù sao thì chất lượng truyện vẫn quá tốt, nên mình vẫn sẽ tiếp tục ủng hộ tác giả và hóng từng chương mới. Hy vọng bộ truyện sẽ tiếp tục phát triển mạnh mẽ và không bị sa đà vào những plot quá rối rắm hoặc kéo dài không cần thiết. Ai chưa đọc bộ này thì nên thử ngay nhé, đảm bảo không thất vọng!',
            timeAgo: '3 Ngày Trước',
        },
        {
            id: 3,
            name: 'Hà My',
            content:
                'Mình đã theo dõi bộ truyện này từ những chương đầu tiên và thực sự rất ấn tượng với cách tác giả xây dựng cốt truyện. Ban đầu, mọi thứ có vẻ khá đơn giản, nhưng càng về sau, sự phát triển của nhân vật chính cùng những bí ẩn xung quanh thế giới trong truyện khiến mình không thể rời mắt. Điều làm mình thích nhất ở bộ này chính là hệ thống tu luyện được thiết kế rất chặt chẽ, không có những màn buff sức mạnh vô lý, tất cả đều có sự hợp lý nhất định. \n\nMột điểm cộng lớn nữa là các nhân vật phụ trong truyện không bị xây dựng một cách hời hợt. Mỗi nhân vật đều có câu chuyện riêng, có động lực riêng và không ai bị lãng quên dù chỉ xuất hiện trong một vài chương. Điều này tạo ra một thế giới sống động, chân thực, nơi mà mỗi hành động của nhân vật đều có ý nghĩa và tác động đến cốt truyện. \n\nVề phần hình ảnh, art truyện ngày càng đẹp hơn qua từng chương. Ban đầu có thể chưa thực sự quá xuất sắc, nhưng càng về sau, nét vẽ càng chi tiết, biểu cảm nhân vật cũng rất sống động, giúp người đọc cảm nhận được sự căng thẳng, kịch tính trong từng tình huống. Mình đặc biệt thích những cảnh chiến đấu trong truyện, từ cách mô tả kỹ năng cho đến diễn biến trận đấu, tất cả đều rất mượt mà, không bị nhàm chán hay quá dài dòng. \n\nBên cạnh đó, yếu tố hài hước trong truyện cũng được khai thác rất tốt. Những màn đối đáp giữa các nhân vật, những tình huống tréo ngoe mà main gặp phải khiến mình không nhịn được cười. Tuy nhiên, truyện vẫn giữ được sự cân bằng giữa hài hước và kịch tính, không bị lố hoặc làm giảm đi sự nghiêm túc của cốt truyện chính. \n\nTuy nhiên, nếu phải nói một điểm chưa hài lòng thì có lẽ là tốc độ ra chương hơi chậm so với sự mong đợi của mình. Vì quá cuốn nên tuần nào mình cũng hóng chương mới, nhưng đôi lúc lại phải chờ hơi lâu. Dù sao thì chất lượng truyện vẫn quá tốt, nên mình vẫn sẽ tiếp tục ủng hộ tác giả và hóng từng chương mới. Hy vọng bộ truyện sẽ tiếp tục phát triển mạnh mẽ và không bị sa đà vào những plot quá rối rắm hoặc kéo dài không cần thiết. Ai chưa đọc bộ này thì nên thử ngay nhé, đảm bảo không thất vọng!',
            timeAgo: '5 Ngày Trước',
        },
        {
            id: 4,
            name: 'Linh Nhi',
            content:
                'Truyện này cuốn thật sự! Tình tiết hấp dẫn, mỗi chap lại có một cú twist bất ngờ. Tác giả xây dựng nhân vật rất có chiều sâu, đặc biệt là nhân vật phản diện. Art cũng rất đẹp, nét vẽ ngày càng tiến bộ qua từng chương. Không biết mấy chap sau sẽ ra sao, nhưng mình rất mong chờ trận chiến sắp tới. Hi vọng tác giả không buff quá đà, giữ cốt truyện hợp lý là được!',
            timeAgo: '2 Ngày Trước',
        },
        {
            id: 5,
            name: 'Minh Tuấn',
            content:
                'Mình đã theo dõi bộ truyện này từ những chương đầu tiên và thực sự rất ấn tượng với cách tác giả xây dựng cốt truyện. Ban đầu, mọi thứ có vẻ khá đơn giản, nhưng càng về sau, sự phát triển của nhân vật chính cùng những bí ẩn xung quanh thế giới trong truyện khiến mình không thể rời mắt. Điều làm mình thích nhất ở bộ này chính là hệ thống tu luyện được thiết kế rất chặt chẽ, không có những màn buff sức mạnh vô lý, tất cả đều có sự hợp lý nhất định. \n\nMột điểm cộng lớn nữa là các nhân vật phụ trong truyện không bị xây dựng một cách hời hợt. Mỗi nhân vật đều có câu chuyện riêng, có động lực riêng và không ai bị lãng quên dù chỉ xuất hiện trong một vài chương. Điều này tạo ra một thế giới sống động, chân thực, nơi mà mỗi hành động của nhân vật đều có ý nghĩa và tác động đến cốt truyện. \n\nVề phần hình ảnh, art truyện ngày càng đẹp hơn qua từng chương. Ban đầu có thể chưa thực sự quá xuất sắc, nhưng càng về sau, nét vẽ càng chi tiết, biểu cảm nhân vật cũng rất sống động, giúp người đọc cảm nhận được sự căng thẳng, kịch tính trong từng tình huống. Mình đặc biệt thích những cảnh chiến đấu trong truyện, từ cách mô tả kỹ năng cho đến diễn biến trận đấu, tất cả đều rất mượt mà, không bị nhàm chán hay quá dài dòng. \n\nBên cạnh đó, yếu tố hài hước trong truyện cũng được khai thác rất tốt. Những màn đối đáp giữa các nhân vật, những tình huống tréo ngoe mà main gặp phải khiến mình không nhịn được cười. Tuy nhiên, truyện vẫn giữ được sự cân bằng giữa hài hước và kịch tính, không bị lố hoặc làm giảm đi sự nghiêm túc của cốt truyện chính. \n\nTuy nhiên, nếu phải nói một điểm chưa hài lòng thì có lẽ là tốc độ ra chương hơi chậm so với sự mong đợi của mình. Vì quá cuốn nên tuần nào mình cũng hóng chương mới, nhưng đôi lúc lại phải chờ hơi lâu. Dù sao thì chất lượng truyện vẫn quá tốt, nên mình vẫn sẽ tiếp tục ủng hộ tác giả và hóng từng chương mới. Hy vọng bộ truyện sẽ tiếp tục phát triển mạnh mẽ và không bị sa đà vào những plot quá rối rắm hoặc kéo dài không cần thiết. Ai chưa đọc bộ này thì nên thử ngay nhé, đảm bảo không thất vọng!',
            timeAgo: '3 Ngày Trước',
        },
    ];

    const [toggleNotification, setToggleNotification] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);

    return (
        <>
            <div className={cx('header-top')}>
                <div className={cx('header-div-middle', 'container')}>
                    <div className={cx('header-top-right')}>
                        <div className={cx('header-logo')}>
                            <Link className={cx('d-md-flex')} to="/">
                                <img
                                    src="/img/logo-h-manga.png"
                                    alt="Logo"
                                    className={cx('header-logo__img')}
                                />
                                <img
                                    src="/img/h_manga_logo_final_black-removebg-preview.png"
                                    alt="Logo-title"
                                    className={cx(
                                        'header-logo__title',
                                        'd-none',
                                        'd-md-block'
                                    )}
                                />
                            </Link>
                        </div>
                        <div className={cx('toggle-theme')}>
                            <FontAwesomeIcon
                                icon={faLightbulb}
                                className={cx('toggle-theme__icon')}
                            />
                        </div>
                        <div
                            className={cx(
                                'search-box',
                                'd-none',
                                'd-sm-flex',
                                'd-md-flex'
                            )}
                        >
                            <input
                                type="text"
                                className={cx('search-input')}
                                placeholder="Bạn muốn tìm truyện gì"
                            />
                            <button
                                className={cx(
                                    'search-btn'
                                )}
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                    <div className={cx('header-top-left')}>
                        <div
                            className={cx(
                                'search-btn',
                                'd-flex',
                                'd-sm-none',
                                'd-md-none'
                            )}
                            onClick={() => setToggleSearch(!toggleSearch)}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>

                        <div
                            onClick={() =>
                                setToggleNotification(!toggleNotification)
                            }
                            className={cx('notification-btn')}
                        >
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <div
                            className={cx(
                                'notification-box',
                                `${toggleNotification ? 'd-block' : 'd-none'}`
                            )}
                        >
                            <ul className={cx('notification-list')}>
                                {messagesData.map((mess) => (
                                    <li
                                        key={mess.id}
                                        className={cx('notification-item')}
                                    >
                                        <Link to="#">
                                            <h3>
                                                {mess.name} vừa trả lời bình
                                                luận của bạn
                                            </h3>
                                            <p>
                                                <FontAwesomeIcon
                                                    icon={faClock}
                                                />
                                                {mess.timeAgo}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cx('user-account')}>
                            <img
                                className={cx('user-account__img')}
                                src="/img/avatar.jpg"
                                alt="Avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container', `${toggleSearch ? 'd-block' : 'd-none'}`, 'd-block', 'd-sm-none')}>
                <div className={cx('search-box', 'search-box-mobile', )}>
                    <input
                        type="text"
                        className={cx('search-input')}
                        placeholder="Bạn muốn tìm truyện gì"
                    />
                    <button
                        className={cx('search-btn')}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default HeaderTop;
