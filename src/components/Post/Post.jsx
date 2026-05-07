import React from 'react';
import { Link, useNavigate } from 'react-router';


const Post = ({ post }) => {

    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/laptops')
    }
    return (
        <div>
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;