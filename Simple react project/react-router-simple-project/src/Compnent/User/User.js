import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';

const User = () => {
    const [data, setData] = useState([])
    console.log(data);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            {
                data.map(data => <UserInfo  data={data}/> )
            }

        </div>
    );
};

export default User;