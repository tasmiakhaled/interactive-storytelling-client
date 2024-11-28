import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/UserContexts";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const { register, handleSubmit, reset, watch } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const emailValue = watch("email");
    const passwordValue = watch("password");

    const onSubmit = (data) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            toast.error("Invalid email address."); // Show error toast for invalid email
            return;
        }

        createUser(data.email, data.password)
            .then((result) => {
                console.log("User signed up:", result.user);
                toast.success("Successfully signed up!"); // Show success toast
                updateUserProfile(data.name)
                .then( () => {
                    console.log("user profile updated")
                    reset();
                })
                .catch(error => console.log(error))
            })
            .catch((error) => {
                console.error("Sign up error:", error.message);
                toast.error(`Sign up failed: ${error.message}`); // Show error toast for Firebase errors
            });
    };

    return (
        <>
            <Helmet>
                <title>BranchTales | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex lg:flex-row items-center justify-center">
                    <div className="text-center md: w-1/2 lg:text-left lg:w-1/2">
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl md:w-1/2">
                        <h1 className="text-4xl font-bold text-center">Sign Up now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold text-white">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name")}
                                    name="name"
                                    placeholder="Type your full name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold text-white">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    })}
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered text-black"
                                    required
                                />
                                {emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue) && (
                                    <small className="text-red-500 text-sm mt-1" role="alert">
                                        Please enter a valid email address.
                                    </small>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold text-white">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password")}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered text-black"
                                    required
                                />
                                {passwordValue && passwordValue.length < 8 && (
                                    <small className="text-red-500 text-sm mt-1" role="alert">
                                        Password must contain at least 8 characters.
                                    </small>
                                )}
                            </div>
                            <div className="form-control mt-6 flex items-center justify-center">
                                <input
                                    className="btn w-20 rounded-full hover:btn-accent"
                                    type="submit"
                                    value="Sign Up"
                                />
                            </div>
                            <div className="text-center">
                                <p>
                                    <small>
                                        Already have an account?{" "}
                                        <Link className="text-white hover:text-yellow-500" to="/login">
                                            Go to Log In
                                        </Link>
                                    </small>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Toast container to display notifications */}
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default SignUp;