import React, { useEffect, useState } from 'react';

const Post = () => {

    const[post, setPost] = useState([]);
    function dataload() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json())
        .then(data => setPost(data))
    }
    return (
        <div>

            <button onClick={dataload}> click</button>
            {
                post.map(p => <li>{p.title}</li>)
            }
        </div>
    );
};

export default Post;