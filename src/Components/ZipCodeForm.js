import React, { Component } from 'react'
import ZipCodeCityCard from './ZipCodeCityCard'

export class ZipCodeFormClass extends Component {

    constructor(){
        super();
        this.state = {
            zipCode: null,
            cityData: [],
            noResultText: " ",
        };
    }

    //every time a user enters a zip code, update it
    handleChange = event => {
        console.log("handleChange")
        this.setState({zipCode: event.target.value});
    }

    //get data from an api
    getData = async () => {
        console.log("inside getData")
        try{
            //get a response from an api
            let response = await fetch("https://ctp-zip-api.herokuapp.com/zip/" + this.state.zipCode);
            
            //if there was an error, print it
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            
            //turn the response into a data object
            let data = await response.json();

            this.setState({
                cityData: data, //set the city data to the data received from an api
                noResultText: " " //set the text of <p> tag
            });
        }

        catch(error){
            console.log(error);
            this.setState({
                cityData: [],
                noResultText: "No Result"
            });
        }
    }    

    render() {
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
                        onChange={this.handleChange}
                    />
                    <button onClick={()=>{this.getData()}}>Search</button>
                </div>
                <p id ="zip-not-found">{this.state.noResultText}</p>
                {/* for every city found, print its details */}
                {this.state.cityData.map(city=>{
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
}

export default ZipCodeFormClass
