import React,{useContext} from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';

const Login = () => {
    const {logInUser} = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        logInUser(email, password)
    }
    return (
        <div className='hero bg-base-200 min-h-[calc(100vh-65px)]'>
            <div className='hero-content flex-col lg:flex-row-reverse w-full'>
                <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
                    <div className='card-body'>
                        <form onSubmit={handleLogin}>
                            <fieldset className='fieldset'>
                                <label className='label'>Email</label>
                                <input
                                    name='email'
                                    type='text'
                                    className='input'
                                    placeholder='Type here' />
                                <label className='label'>Password</label>
                                <input
                                    name='password'
                                    type='password'
                                    className='input'
                                    placeholder='Type here' />

                                <div>
                                    <a className='link link-hover'>Forgot password?</a>
                                </div>
                                <button
                                    type='submit'
                                    className='btn btn-neutral mt-4'>Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

