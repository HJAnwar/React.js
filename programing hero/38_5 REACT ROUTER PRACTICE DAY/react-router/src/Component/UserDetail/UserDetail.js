import React, { useContext, useEffect, useState } from 'react';
import { Hello } from '../../App';
const products = [
    { name: "dell", category: "laptop" }, { name: "mama", category: "laptop" },
    { name: "aneat", category: "phone" }, { name: "Samsung", category: "phone" },
    { name: "canon", category: "camera" }, { name: "nikkon", category: "camera" }

]

const UserDetail = () => {
    const [category] = useContext(Hello);
    const [data, setData] = useState([])
    console.log(data);
    useEffect(() => {

        const product = products.filter(pd => pd.category === category)
        setData(product)
    }, [category])

    return (
        <div>
            <ul>
                {
                    data.map(data => <li>{data.category}</li>)
                }
            </ul>

        </div>
    );
};

export default UserDetail;