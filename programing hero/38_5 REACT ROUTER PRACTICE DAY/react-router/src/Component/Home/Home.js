import React, { useContext, useEffect, useState } from 'react';
import { Hello } from '../../App';
import User from '../User/User';

const Home = () => {
   const [data, setData] = useContext(Hello)
    return (
        <div>
            <button onClick={() => setData("laptop")}> laptop</button>
            <button onClick={() => setData("phone")}> phone</button>
            <button onClick={() => setData("camera")}> camera</button>
        </div>
    );
};

export default Home;