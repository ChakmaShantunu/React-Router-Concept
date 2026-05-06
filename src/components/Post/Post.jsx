import React from 'react';
import { Link } from 'react-router';


const Post = ({ post }) => {


    const { id, title, body } = post;
    return (
        <div>
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Post;