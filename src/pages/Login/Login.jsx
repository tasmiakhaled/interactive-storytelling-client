import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../contexts/UserContexts';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const { signIn, googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log("Google Sign-In successful:", user);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error("Google Sign-In error:", error));
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidatedCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (
        <>
            <Helmet>
                <title>BranchTales | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex lg:flex-row items-center justify-center">
                    <div className="text-center md: w-1/2 lg:text-left lg:w-1/2">
                        {/* <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl md:w-1/2">
                        <h1 className="text-4xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                                <label className="label">
                                    <a href="#" className="label-text text-white">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label flex flex-col md:flex-row md:items-center gap-2">
                                    <LoadCanvasTemplate />
                                </label>
                                <div className="flex flex-col md:flex-row md:items-center gap-2">
                                    {/* Captcha Input */}
                                    <input
                                        type="text"
                                        ref={captchaRef}
                                        name="captcha"
                                        placeholder="Type the captcha above"
                                        className="input input-bordered text-black flex-1"
                                        required
                                    />
                                    {/* Validate Button */}
                                    <button
                                        onClick={handleValidatedCaptcha}
                                        className="btn btn-outline text-white border-white hover:border-white focus:border-white focus:outline-white w-full md:w-auto"
                                    >
                                        Validate
                                    </button>
                                </div>
                            </div>
                            <div className="form-control mt-6  flex items-center justify-center">
                                <input disabled={disabled} className="btn w-20 rounded-full hover:btn-accent" type="submit" value="Login" />
                            </div>
                            <div className='text-center'>
                                <p><small>New here? <Link className='text-white hover:text-yellow-500' to="/signup">Create an account.</Link></small></p>
                                <p><small><bold>Or</bold></small></p>
                                <button onClick={handleGoogleSignIn} className='btn btn-outline text-white border-white w-full hover:btn-accent mt-2'>
                                    <FontAwesomeIcon icon={faGoogle} /> Log in with Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;