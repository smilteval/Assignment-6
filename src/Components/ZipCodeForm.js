import React, {useState} from 'react'
import ZipCodeCityList from './ZipCodeCityCard'

export default function ZipCodeForm() {

    return (
        <div>
            <header>
                <h1>Zip Code Search</h1>
            </header>
            <div id="search-section">
                <label>Zip Code:</label>
                <input id="zip-code-input" name="zipCode" type="text" placeholder="Try 10016"></input>
            </div>
            <p></p>
            <ZipCodeCityList
                LocationText = {LocationText}
                State = {State}
                Lat = {Lat}
                Long = {Long}
                EstimatedPopulation = {EstimatedPopulation}
                TotalWages = {TotalWages}
            />
        </div>
    )
}
