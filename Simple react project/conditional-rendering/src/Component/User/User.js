import React, { useState } from 'react';

const User = () => {
    const [like, setLike] = useState([]);
    const [count ,setCount] = useState([])
    console.log(like);
    if (like) {
        setCount(count + 1)
    }
    

    return (
        <div>

            <button onClick={() => setLike(!like)}>like</button>

        </div>
    );
};

export default User;