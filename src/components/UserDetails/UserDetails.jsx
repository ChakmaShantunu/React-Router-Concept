import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    console.log(user);
    const { website, username } = user;
    return (
        <div>
            <h3>User details here</h3>
            <h2>Username: {username}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;