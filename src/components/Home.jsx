import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h3>HOme page {user && <span>{user.name}</span>}</h3>
        </div>
    );
};

export default Home;