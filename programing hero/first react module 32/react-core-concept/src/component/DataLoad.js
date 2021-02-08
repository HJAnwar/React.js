import React, { useEffect, useState } from 'react';

const DataLoad = () => {
    const [user, setUser] = useState([]);
   console.log();
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    })
    return (
        <div>
           
            <ul>
                {
                    user.map(n => <li>{n.name}</li> && <li>{n.email} </li>)
                }
            </ul>
        </div>
    );
};

export default DataLoad;