import React,{useContext} from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {registerUser} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password);
    }
    return (
        <div className='hero bg-base-200 min-h-[calc(100vh-65px)]'>
            <div className='hero-content flex-col lg:flex-row-reverse w-full'>
                <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
                    <div className='card-body'>
                        <form onSubmit={handleRegister}>
                        <fieldset className='fieldset'>
                            <label className='label'>Name</label>
                            <input 
                            name='name'
                            type='text'
                            className='input'
                            placeholder='Type here' 
                            />
                            <label className='label'>Photo URL</label>
                            <input 
                            name='photo'
                            type='text'
                            className='input'
                            placeholder='Type here' />
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
                            <label className='label'>Confirm Password</label>
                            <input
                            name='confirmPassword'
                            type='password'
                            className='input'
                            placeholder='Type here'
                            />
                            <div>
                                <a className='link link-hover'>Forgot password?</a>
                            </div>
                            <button
                            type='submit'
                            className='btn btn-neutral mt-4'>Register</button>
                        </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;