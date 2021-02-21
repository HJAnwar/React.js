import React from 'react';
// import { Link } from 'react-router-dom';



import './UserInfo.css';

const UserInfo = (props) => {
    const { id, name, phone, username, email } = props.data;
    // console.log(data);
    return (
        
            <div className="userStyle">
                <h1>{username}</h1>
                <h4>{email}</h4>
                <p></p>
            </div>
        
    );
};

export default UserInfo;