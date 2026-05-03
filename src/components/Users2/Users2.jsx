import React, { use } from 'react';

const Users2 = ({usersPromise}) => {

    const users = use(usersPromise);
    console.log('users2 data load', users);
    return (
        <div>
            <h2>this is users2</h2>
        </div>
    );
};

export default Users2;