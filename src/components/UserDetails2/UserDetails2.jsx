import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {

    const { name, username } = use(userPromise);
    console.log(name, username);
   
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>UserName: {username}</p>
        </div>
    );
};

export default UserDetails2;