import React, {useState} from 'react'
import ZipCodeCityCard from './ZipCodeCityCard'

export default function ZipCodeForm() {

    let [zipCode,setZipCode] = useState(null);
    let [cityData,setCityData] = useState([]);

    //every time a user enters a zip code, update it
    let handleChange = event => {
        setZipCode(event.target.value);
    }

    //get data from an api
    const getData = async () => {
        let response = await fetch("http://ctp-zip-api.herokuapp.com/zip/"+`${zipCode}`);
        let data = await response.json();
        setCityData(data);
    }

    getData();

    return (
        <div>
            <header>
                <h1>Zip Code Search</h1>
            </header>
            <div id="search-section">
                <label>Zip Code:</label>
                <input 
                    id="zip-code-input"  
                    type="text" 
                    placeholder="Try 10016"
                    onChange={handleChange}
                >
                </input>
            </div>
            <p id ="zip-not-found"></p>

            {/* for every city found, print its details */}
            {cityData.map(city=>{

                // passing all the data values to another component
                return <ZipCodeCityCard
                    LocationText = {city.LocationText}
                    State = {city.State}
                    Lat = {city.Lat}
                    Long = {city.Long}
                    EstimatedPopulation = {city.EstimatedPopulation}
                    TotalWages = {city.TotalWages}
                />
            })}

        </div>
    )
}
