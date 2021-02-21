import React, { useState } from 'react';
import './DataLoad.css';




const DataLoad = (props) => {
    const country = props.data;

    // const [population, setPopulation] = useState(0);
    const [count, setCount] = useState(0);
    const handleAdded = (props) => {
        //console.log(props);
        //console.log('click me click me i,am heck OMG OMG ');
        setCount(props)
        //let po = Number(props);

        //setPopulation(population + props)
    }
    //console.log(country);
//   
    
    return (
        <div className='container'>
            <div className='Country'>
                {/* <h2> Add Country : {count}</h2>
                <h3> population : {population}</h3> */}

                {
                    country.map(co =>
                        <div className='div' style={{ marginLeft: "100px" }} >
                            <img style={{ height: "220px", width: "430px" }} src={co.flag} alt="" />

                            <h2> Country Name :  {co.name}</h2>

                            <br />
                            <button onClick={() => handleAdded(co)}>More Detail</button>
                        </div>
                    )
                }
            </div>
            <div className="detail">
                <h1>Name : {count.name} </h1>
                <h2>Alpha2Code: {count.alpha2Code}</h2>
                <h2>Alpha3Code: {count.alpha3Code}</h2>
                {/* <h2>AltSpellings: {count.altSpellings[0]}, {count.altSpellings[1]}</h2>

                <h2>Area : {count.area}</h2>
                <h2>Borders: {count.borders[0]}, {count.borders[1]}, {count.borders[2]}, {count.borders[3]}, {count.borders[4]}</h2>
                <h2> CallingCodes: {count.callingCodes[0]}</h2>
                <h2> Capital : {count.capital}</h2>
                <h2> currencies: {count.currencies[0]} </h2>
                <h2>Demonym {count.demonym}</h2> */}
                {/* <h2>
                Borders : {number(count.borders)}
                </h2> */}
                <h2>Area : {count.area} KM</h2>
                <h2>NativeName: {count.nativeName}</h2>
                <h2>NumericCode: {count.numericCode} </h2>
                <h2>Population: {count.population} </h2>
                <h2>Region : {count.region}</h2>
                <h2>Subregion: {count.subregion}</h2>
                <h2>Timezones: {count.timezones}</h2>
                <h2>TopLevelDomain: {count.topLevelDomain}</h2>
                <h2>translations: </h2>
                <h2>regionalBlocs: </h2>
                <h2>translations:</h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>

                {
                    console.log(count)
                }
            </div>
        </div>

    );
};

export default DataLoad;