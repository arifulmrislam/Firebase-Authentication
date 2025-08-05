import React, {useContext} from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext);
    console.log(user);
    return (
        <div className='flex justify-center items-center h-screen'> 
            <h2>Hello from Home!!</h2>
        </div>
    );
};

export default Home;