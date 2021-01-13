import React, { Component } from 'react'

export class ZipCodeForm extends Component {

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
                    <button id="search-btn" onClick={()=>{this.getData()}}>Search</button>
                </div>
                <div>
                    <p id ="zip-not-found">{this.state.noResultText}</p>    
                </div>

                {/* for every city found, print its details */}
                {this.state.cityData.map(city=>{
                    // passing all the data values to another component
                    return (
                        //static city card 
                        <div id="city-card">
                            <h2>{city.LocationText}</h2>
                            <div id ="city-info">
                                <ul>
                                    <li id="state">State: {city.State}</li>
                                    <li id="location">Location: ({city.Lat},{city.Long})</li>
                                    <li id="population">Population (estimated): {city.EstimatedPopulation}</li>
                                    <li id="wages">Total Wages: {city.TotalWages}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            
            </div>
        )
    }
}

export default ZipCodeForm
