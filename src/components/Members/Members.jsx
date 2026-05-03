import React from 'react';
import { useLoaderData } from 'react-router';

const Members = () => {

    const members = useLoaderData();
    console.log(members);
    return (
        <div>
            <h2>this is members page</h2>
        </div>
    );
};

export default Members;