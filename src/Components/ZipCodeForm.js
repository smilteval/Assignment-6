import React from 'react'
import ZipCodeCityList from './ZipCodeCityList'

export default function ZipCodeForm() {
    return (
        <div>
            <header>
                <h1>Zip Code Search</h1>
            </header>
            <div id="search-section">
                <label for="zip-code">Zip Code:</label>
                <input id="zip-code-input" name="zipCode" type="text" placeholder="Try 10016"></input>
            </div>
            <p></p>
            <ZipCodeCityList/>
        </div>
    )
}
