import React from 'react';
import { Link } from 'react-router';


const userStyle = {
    border: '2px solid yellow',
    borderRadiun: '20px',
    padding: '10px',
    margin: '10px'
}

const User = ({ user }) => {
    const { name, email, phone, id } = user;
    console.log(user);
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show details</Link>
        </div>
    );
};

export default User;