import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const { signIn, singInWithGoogle } = useContext(AuthContext);
    console.log(signIn)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p>
                                <span>New to Auth Master? Please</span>
                                <Link to='/register' className="btn btn-active btn-link">Register</Link>
                            </p>
                        </label>
                    </form>
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;