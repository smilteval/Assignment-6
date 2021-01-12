import React from 'react'

export default function ZipCodeCityList() {

    //getting the city data based on zip code
    const getCities = async () => {

        try {
            //hard coded 11235
            let response = await fetch("http://ctp-zip-api.herokuapp.com/zip/11235");

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            let zipCodeData = await response.json();
            console.log(zipCodeData);
        } 
        catch (error) {
            console.log("My error", error);
        }
    }

    getCities();


    return (
        //static city card 
        <div id="city-card">
            <h2>New York, NY</h2>
            <div id ="city-info">
                <p id="state">New York</p>
                <p id="location">(00,00)</p>
                <p id="population"> 1312159653</p>
                <p id="wages"> 564561</p>
            </div>
        </div>
    )
}
