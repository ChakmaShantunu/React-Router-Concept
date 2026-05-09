import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetail = () => {

    const postDetail = useLoaderData();
    console.log(postDetail);

    const { postId } = useParams();
    console.log(postId);

    let navigate = useNavigate();
    return (
        <div>
            <h3>{postDetail.body}</h3>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail;