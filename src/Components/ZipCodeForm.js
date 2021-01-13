import React, {useState} from 'react'
import ZipCodeCityCard from './ZipCodeCityCard'

export default function ZipCodeForm() {

    let [zipCode,setZipCode] = useState(null);

    let handleChange = event => {
        setZipCode(event.target.value);
    }

    let[cityData, setCityData] = useState([]);

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
        </div>
    )
}
