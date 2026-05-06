import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {

    const postDetail = useLoaderData();
    console.log(postDetail);
    return (
        <div>
            <h3>{postDetail.body}</h3>
        </div>
    );
};

export default PostDetail;