import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faComment,
    faComments,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Comment = ({ detail = false }) => {
    const [expandedComments, setExpandedComments] = useState({});
    const [showMoreButtons, setShowMoreButtons] = useState({});
    const contentRefs = useRef({});

    const commentsData = [
        {
            id: 1,
            avatar: 'https://i.pinimg.com/736x/1f/18/53/1f1853c48f5090ddf75dd1948b939577.jpg',
            name: 'Linh Nhi',
            level: 'Luyện Hư',
            content:
                'Truyện này cuốn thật sự! Tình tiết hấp dẫn, mỗi chap lại có một cú twist bất ngờ. Tác giả xây dựng nhân vật rất có chiều sâu, đặc biệt là nhân vật phản diện. Art cũng rất đẹp, nét vẽ ngày càng tiến bộ qua từng chương. Không biết mấy chap sau sẽ ra sao, nhưng mình rất mong chờ trận chiến sắp tới. Hi vọng tác giả không buff quá đà, giữ cốt truyện hợp lý là được!',
            timeAgo: '2 Ngày Trước',
        },
        {
            id: 2,
            avatar: 'https://i.pinimg.com/736x/1f/18/53/1f1853c48f5090ddf75dd1948b939577.jpg',
            name: 'Minh Tuấn',
            level: 'Nguyên Anh',
            content:
                'Mình đã theo dõi bộ truyện này từ những chương đầu tiên và thực sự rất ấn tượng với cách tác giả xây dựng cốt truyện. Ban đầu, mọi thứ có vẻ khá đơn giản, nhưng càng về sau, sự phát triển của nhân vật chính cùng những bí ẩn xung quanh thế giới trong truyện khiến mình không thể rời mắt. Điều làm mình thích nhất ở bộ này chính là hệ thống tu luyện được thiết kế rất chặt chẽ, không có những màn buff sức mạnh vô lý, tất cả đều có sự hợp lý nhất định. \n\nMột điểm cộng lớn nữa là các nhân vật phụ trong truyện không bị xây dựng một cách hời hợt. Mỗi nhân vật đều có câu chuyện riêng, có động lực riêng và không ai bị lãng quên dù chỉ xuất hiện trong một vài chương. Điều này tạo ra một thế giới sống động, chân thực, nơi mà mỗi hành động của nhân vật đều có ý nghĩa và tác động đến cốt truyện. \n\nVề phần hình ảnh, art truyện ngày càng đẹp hơn qua từng chương. Ban đầu có thể chưa thực sự quá xuất sắc, nhưng càng về sau, nét vẽ càng chi tiết, biểu cảm nhân vật cũng rất sống động, giúp người đọc cảm nhận được sự căng thẳng, kịch tính trong từng tình huống. Mình đặc biệt thích những cảnh chiến đấu trong truyện, từ cách mô tả kỹ năng cho đến diễn biến trận đấu, tất cả đều rất mượt mà, không bị nhàm chán hay quá dài dòng. \n\nBên cạnh đó, yếu tố hài hước trong truyện cũng được khai thác rất tốt. Những màn đối đáp giữa các nhân vật, những tình huống tréo ngoe mà main gặp phải khiến mình không nhịn được cười. Tuy nhiên, truyện vẫn giữ được sự cân bằng giữa hài hước và kịch tính, không bị lố hoặc làm giảm đi sự nghiêm túc của cốt truyện chính. \n\nTuy nhiên, nếu phải nói một điểm chưa hài lòng thì có lẽ là tốc độ ra chương hơi chậm so với sự mong đợi của mình. Vì quá cuốn nên tuần nào mình cũng hóng chương mới, nhưng đôi lúc lại phải chờ hơi lâu. Dù sao thì chất lượng truyện vẫn quá tốt, nên mình vẫn sẽ tiếp tục ủng hộ tác giả và hóng từng chương mới. Hy vọng bộ truyện sẽ tiếp tục phát triển mạnh mẽ và không bị sa đà vào những plot quá rối rắm hoặc kéo dài không cần thiết. Ai chưa đọc bộ này thì nên thử ngay nhé, đảm bảo không thất vọng!',
            timeAgo: '3 Ngày Trước',
        },
        {
            id: 3,
            avatar: 'https://i.pinimg.com/736x/1f/18/53/1f1853c48f5090ddf75dd1948b939577.jpg',
            name: 'Hà My',
            level: 'Kim Đan',
            content:
                'Mình đã theo dõi bộ truyện này từ những chương đầu tiên và thực sự rất ấn tượng với cách tác giả xây dựng cốt truyện. Ban đầu, mọi thứ có vẻ khá đơn giản, nhưng càng về sau, sự phát triển của nhân vật chính cùng những bí ẩn xung quanh thế giới trong truyện khiến mình không thể rời mắt. Điều làm mình thích nhất ở bộ này chính là hệ thống tu luyện được thiết kế rất chặt chẽ, không có những màn buff sức mạnh vô lý, tất cả đều có sự hợp lý nhất định. \n\nMột điểm cộng lớn nữa là các nhân vật phụ trong truyện không bị xây dựng một cách hời hợt. Mỗi nhân vật đều có câu chuyện riêng, có động lực riêng và không ai bị lãng quên dù chỉ xuất hiện trong một vài chương. Điều này tạo ra một thế giới sống động, chân thực, nơi mà mỗi hành động của nhân vật đều có ý nghĩa và tác động đến cốt truyện. \n\nVề phần hình ảnh, art truyện ngày càng đẹp hơn qua từng chương. Ban đầu có thể chưa thực sự quá xuất sắc, nhưng càng về sau, nét vẽ càng chi tiết, biểu cảm nhân vật cũng rất sống động, giúp người đọc cảm nhận được sự căng thẳng, kịch tính trong từng tình huống. Mình đặc biệt thích những cảnh chiến đấu trong truyện, từ cách mô tả kỹ năng cho đến diễn biến trận đấu, tất cả đều rất mượt mà, không bị nhàm chán hay quá dài dòng. \n\nBên cạnh đó, yếu tố hài hước trong truyện cũng được khai thác rất tốt. Những màn đối đáp giữa các nhân vật, những tình huống tréo ngoe mà main gặp phải khiến mình không nhịn được cười. Tuy nhiên, truyện vẫn giữ được sự cân bằng giữa hài hước và kịch tính, không bị lố hoặc làm giảm đi sự nghiêm túc của cốt truyện chính. \n\nTuy nhiên, nếu phải nói một điểm chưa hài lòng thì có lẽ là tốc độ ra chương hơi chậm so với sự mong đợi của mình. Vì quá cuốn nên tuần nào mình cũng hóng chương mới, nhưng đôi lúc lại phải chờ hơi lâu. Dù sao thì chất lượng truyện vẫn quá tốt, nên mình vẫn sẽ tiếp tục ủng hộ tác giả và hóng từng chương mới. Hy vọng bộ truyện sẽ tiếp tục phát triển mạnh mẽ và không bị sa đà vào những plot quá rối rắm hoặc kéo dài không cần thiết. Ai chưa đọc bộ này thì nên thử ngay nhé, đảm bảo không thất vọng!',
            timeAgo: '5 Ngày Trước',
        },
    ];

    // Kiểm tra nếu nội dung dài hơn 114px thì hiển thị nút "Xem thêm"
    useEffect(() => {
        const checkShowMoreButtons = () => {
            const newShowMoreButtons = {};
            commentsData.forEach((comment) => {
                const ref = contentRefs.current[comment.id];
                if (ref) {
                    newShowMoreButtons[comment.id] = ref.scrollHeight > 114;
                }
            });

            // ✅ Kiểm tra nếu state mới khác với state cũ mới cập nhật
            setShowMoreButtons((prev) => {
                return JSON.stringify(prev) !==
                    JSON.stringify(newShowMoreButtons)
                    ? newShowMoreButtons
                    : prev;
            });
        };

        checkShowMoreButtons();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // ✅ Chỉ chạy một lần khi component mount

    return (
        <div
            className={cx('comment-container-wrapper')}
            style={{
                borderTopLeftRadius: detail ? '0px' : '6px',
                borderTopRightRadius: detail ? '0px' : '6px',
                marginBottom: detail ? '0px' : '45px',
            }}
        >
            <div className={cx('comment-container')}>
                <span className={cx('comment-container__title')}>
                    <FontAwesomeIcon icon={faComments} /> Bình Luận (
                    {commentsData.length})
                </span>
                <div className={cx('notify-fanpage')}>
                    {'Vào '}
                    <Link to="#">Fanpage</Link>
                    {' like và theo dõi để ủng hộ TruyenQQ nhé.'}
                </div>
                <div className={cx('comment-placeholder')}>
                    hãy bình luận có văn hóa để tránh bị khóa tài khoản
                </div>
                <div className={cx('comment-list')}>
                    {commentsData.map((comment) => (
                        <article
                            className={cx('comment-item-wrapper')}
                            key={comment.id}
                        >
                            <div className={cx('comment-item')}>
                                <figure className={cx('avatar-comment')}>
                                    <img
                                        src={comment.avatar}
                                        alt={comment.name}
                                    />
                                </figure>
                                <div className={cx('comment-item-content')}>
                                    <div
                                        className={cx(
                                            'comment-content-wrapper'
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                'comment-content-title',
                                                'level_6'
                                            )}
                                        >
                                            <strong>{comment.name}</strong>
                                            <span>{comment.level}</span>
                                        </div>
                                        <div
                                            ref={(el) =>
                                                (contentRefs.current[
                                                    comment.id
                                                ] = el)
                                            }
                                            className={cx(
                                                'comment-main-content',
                                                {
                                                    expanded:
                                                        expandedComments[
                                                            comment.id
                                                        ],
                                                }
                                            )}
                                            style={{
                                                maxHeight: expandedComments[
                                                    comment.id
                                                ]
                                                    ? 'none'
                                                    : '114px',
                                            }}
                                        >
                                            {comment.content}
                                        </div>
                                        {showMoreButtons[comment.id] && (
                                            <div
                                                className={cx(
                                                    'show-more-btn-wrapper'
                                                )}
                                            >
                                                <button
                                                    onClick={() =>
                                                        setExpandedComments(
                                                            (prev) => ({
                                                                ...prev,
                                                                [comment.id]:
                                                                    !prev[
                                                                        comment
                                                                            .id
                                                                    ],
                                                            })
                                                        )
                                                    }
                                                    className={cx(
                                                        'show-more-btn'
                                                    )}
                                                >
                                                    {expandedComments[
                                                        comment.id
                                                    ]
                                                        ? 'Ẩn bớt'
                                                        : 'Xem thêm'}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <div className={cx('comment-item-action')}>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faThumbsUp}
                                            />
                                            <span>Thích</span>
                                        </span>
                                        <span>
                                            <FontAwesomeIcon icon={faComment} />
                                            <span>Trả lời</span>
                                        </span>
                                        <span>{comment.timeAgo}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className={cx('page-redirect')}>
                    <p className={cx('active')}>1</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;
