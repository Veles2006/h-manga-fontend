import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login-page')}>
            <div className={cx('login-choice')}>
                <div className={cx('login-title')}>
                    <h1>Welcome</h1>
                    <p>Sign in to start</p>
                </div>
                <div className={cx('login-button-wrapper')}>
                    <div className={cx('login-buttons')}>
                        <div
                            className={cx(
                                'login-button-item',
                                'login-button-item--box-shadow'
                            )}
                        >
                            <div className={cx('login-button-item__svg')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="25 25 105 105"
                                    style={{
                                        enableBackground: 'new 0 0 150 150',
                                    }}
                                    width="28px"
                                    height="29px"
                                >
                                    {/* Không dùng thẻ <style> ở đây, các lớp được định nghĩa trong file SCSS */}
                                    <path
                                        className={cx('st14')}
                                        d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5
                   C115,101.8,120,90,120,76.1L120,76.1z"
                                    />
                                    <path
                                        className={cx('st15')}
                                        d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4
                   c-12,0-22.1-8.1-25.8-18.9L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
                                    />
                                    <path
                                        className={cx('st12')}
                                        d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
                                    />
                                    <path
                                        className={cx('st13')}
                                        d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41
                   C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
                                    />
                                </svg>
                            </div>
                            <div className={cx('login-button-item__title')}>
                                <p>Continue with Google</p>
                            </div>
                        </div>
                        <div
                            className={cx(
                                'login-button-item',
                                'login-button-item--meta'
                            )}
                        >
                            <div className={cx('login-button-item__svg')}>
                                <svg
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 287.56 191"
                                >
                                    <defs>
                                        <style>
                                            {`
      .cls-1 { fill: #FFFFFF; }
      .cls-2 { fill: #FFFFFF; }
      .cls-3 { fill: #FFFFFF; }
    `}
                                        </style>
                                    </defs>
                                    <title>facebook-meta</title>
                                    <path
                                        className="cls-1"
                                        d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z"
                                    />
                                    <path
                                        className="cls-2"
                                        d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z"
                                    />
                                    <path
                                        className="cls-3"
                                        d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z"
                                    />
                                </svg>
                            </div>
                            <div className={cx('login-button-item__title')}>
                                <p>Continue with Meta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('login-question')}>
                <span>Haven't account?</span>
                <Link to="/sign-up">Sign up!</Link>
            </div>
            <div className={cx('login-input-wrapper')}>
                <div className={cx('login-input-box')}>
                    <form>
                        <div className={cx('login-input')}>
                            <input placeholder="Name" />
                        </div>
                        <div className={cx('login-input')}>
                            <input type='password' placeholder="Password" />
                            <a href="/">forgot password?</a>
                        </div>
                        <button
                            className={cx('login-input-button')}
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

export default Login;
