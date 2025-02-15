import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Onboarding.module.scss';

const cx = classNames.bind(styles);

function Onboarding() {
    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const render = new FileReader();
            render.onloadend = () => {
                setAvatar(render.result);
            };
            render.readAsDataURL(file);
        }
    };

    return (
        <div className={cx('page-onboarding')}>
            <div className={cx('avatar-wrapper')}>
                <div className={cx('avatar')}>
                    {avatar ? null : <div className={cx('avatar-add')}></div>}
                    <label htmlFor="choose-avatar">
                        {avatar ? (
                            <img
                                src={avatar}
                                e
                                alt="Avatar image"
                                className={cx('avatar-img')}
                            />
                        ) : (
                            <div src="" className={cx('non-avatar-img')}></div>
                        )}
                    </label>
                    <input type="file" id="choose-avatar" onChange={handleAvatarChange} />
                </div>
            </div>
            <div className={cx('onboarding-input-wrapper')}>
                <div className={cx('onboarding-input-box')}>
                    <form className={cx('onboarding-form')}>
                        <div>
                            <div className={cx('onboarding-input')}>
                                <input placeholder="Enter your name" />
                            </div>
                            <div className={cx('onboarding-input')}>
                                <input placeholder="Enter your nickname" />
                            </div>
                            <div className={cx('onboarding-input')}>
                                <input
                                    type="email"
                                    placeholder="Write your email"
                                />
                            </div>
                            <div className={cx('onboarding-input')}>
                                <input
                                    type="password"
                                    placeholder="Make a password"
                                />
                            </div>
                            <div className={cx('onboarding-input')}>
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                />
                            </div>
                        </div>
                        <button
                            className={cx('onboarding-input-button')}
                            type="submit"
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Onboarding;
