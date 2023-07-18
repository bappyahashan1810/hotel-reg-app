import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const SignUp = () => {
    const { userSignUp } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const handlerSubmit = event => {
        setSuccess(false);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userSignUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Welcome to our <span className='text-orange-500 font-bold'>Tenda</span>.Your Experice will be High.</p>
                        {success && <p className='text-green-500'><small>Successfull SignUp</small></p>}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlerSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <p className='text-red-500'><small>{error}</small></p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                        <label className="label">
                            <p><small>Have a account? please <Link to='/login'>LogIn</Link></small></p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;