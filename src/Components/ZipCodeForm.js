import React, {useState} from 'react'
import ZipCodeCityCard from './ZipCodeCityCard'

export default function ZipCodeForm() {

    let [zipCode,setZipCode] = useState(null);

    let handleChange = event => {
        setZipCode(event.target.value);
    }

    console.log(zipCode);

    return (
        <div>
            <header>
                <h1>Zip Code Search</h1>
            </header>
            <div id="search-section">
                <label>Zip Code:</label>
                <input 
                    id="zip-code-input" 
                    name="zipCode" 
                    type="text" 
                    placeholder="Try 10016"
                    onChange={handleChange}
                >
                </input>
            </div>
            <p id ="zip-not-found"></p>
            {/* <ZipCodeCityCard
                locationText = {locationText}
                state = {state}
                lat = {lat}
                long = {long}
                estimatedPopulation = {estimatedPopulation}
                totalWages = {totalWages}
            /> */}
        </div>
    )
}
