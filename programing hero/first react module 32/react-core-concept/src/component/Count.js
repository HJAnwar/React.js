import React, { useState } from 'react';

const Count = () => {

    const [count, setCount] = useState(1);

    return (
        <div>
            <h1> Count : {count}</h1>

            <button onClick={() => {
                setCount(count + 1)
            }}>plz click me</button>

            <button onClick={() => {
                if(count > 1){
                    setCount(count - 1)
                }
            }}>no no click me</button>
        </div>
    );
};

export default Count;