import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const { records } = useLoaderData();
    return (
        <div>
            <h2>this is users</h2>
            {records.length}
        </div>
    );
};

export default Users;