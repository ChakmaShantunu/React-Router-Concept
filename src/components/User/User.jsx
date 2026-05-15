import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';


const User = ({ user }) => {

    const userStyle = {
        border: '2px solid yellow',
        borderRadiun: '20px',
        padding: '10px',
        margin: '10px'
    }


    const { name, email, phone, id } = user;
    console.log(user);

    const location = useLocation();
    console.log(location);

    const [showInfo, setShowInfo] = useState(false)

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    const [visitHome, setVisitHome] = useState(false);

    if (visitHome) {
        return <Navigate to={"/"}></Navigate>
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide' : 'Show'} info</button>

            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
            }

            <button onClick={() => setVisitHome(true)}>Visit Home</button>
<button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Click Me
      </button>
        </div>
    );
};

export default User;