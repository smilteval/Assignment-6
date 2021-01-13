import React, {useState} from 'react'
import ZipCodeCityCard from './ZipCodeCityCard'

export default function ZipCodeForm() {

    let [zipCode,setZipCode] = useState(null);
    let [cityData,setCityData] = useState([]);
    let [noResultText, setNoResultText] = useState("No Result");

    //every time a user enters a zip code, update it
    let handleChange = event => {
        setZipCode(event.target.value);
    }

    //get data from an api
    const getData = async () => {
        try{
            //get a response from an api
            let response = await fetch("https://ctp-zip-api.herokuapp.com/zip/" + zipCode);
            
            //if there was an error, print it
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            
            //turn the response into a data object
            let data = await response.json();

            //set the city data to the data received from an api
            setCityData(data);

            //set the <p> text to an empty string
            setNoResultText(" ");
        }
        catch(error){
            console.log(error);
            setCityData([]);
            setNoResultText("No Result");
        }
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
                    type="search" 
                    placeholder="Try 10016"
                    onChange={handleChange}
                />
            </div>
            <p id ="zip-not-found">{noResultText}</p>

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
