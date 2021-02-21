import React from 'react';

const Data = (props) => {
   // console.log(props.data.name, handleClick);
    const {name, flag} = props.data;
    const handleClick = props.handleClick;
    
    return (
        <div style={{marginLeft:"20%"}}>
            
            <h1>Country : {name} </h1>
            <img style={{ height:"100px", width:"130px"}} src={flag} alt=""/>
            <button onClick={() => handleClick(props.data)}>Click me now </button>
        </div>
    );
};

export default Data;