import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log("user created successfully")
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
            .catch(error => console.log(error));
        })
    };



    return (
        <>
            <Helmet>
                <title>Sign Up - Bistro Boss </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" name="name" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="PhotoURL" {...register("photoURL", { required: true })} className="input input-bordered"  />
                                {errors.PhotoURL && <span className="text-red-600">Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" name="email" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} className="input input-bordered" name="password" />
                                {errors.password && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <p role="alert" className="text-red-600">Password must be 6 carecters</p>}
                                {errors.password?.type === 'maxLength' && <p role="alert" className="text-red-600">Password must not be 20 carecters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600" role="alert">password must have one number, one special caracter and one uppercase</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <p><small>Already Have an Account? <span className='text-red-600'><Link to='/login'>Login</Link></span></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;