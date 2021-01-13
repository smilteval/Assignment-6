import React, {Component} from 'react'

export class CityForm extends Component {

    constructor(){
        super();
        this.state = {
            city: null,
            zipCodeData: [],
            noResultText: " ",
        };
    }

    //every time a user enters a zip code, update it
    handleChange = event => {
        this.setState({city: event.target.value.toUpperCase()});
    }

    //get data from an api
    getData = async () => {
        console.log("inside getData")
        try{
            //get a response from an api
            let response = await fetch("https://ctp-zip-api.herokuapp.com/city/" + this.state.city);
            
            //if there was an error, print it
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            
            //turn the response into a data object
            let data = await response.json();

            this.setState({
                zipCodeData: data, //set the city data to the data received from an api
                noResultText: " " //set the text of <p> tag
            });

            console.log(data);
        }

        catch(error){
            console.log(error);
            this.setState({
                zipCodeData: [],
                noResultText: "No Result"
            });
        }
    }    

    render(){
        return (
            <div>
                <header>
                    <h1>City Search</h1>
                    </header>
                    <div id="search-section">
                        <label>City:</label>
                        <input 
                            id="city-input"  
                            type="search" 
                            placeholder="Try Springfield"
                            style={{textTransform: "uppercase"}}
                            onChange={this.handleChange}
                        />
                        <button id="search-btn" onClick={()=>{this.getData()}}>Search</button>
                    </div>
                    <div>
                        <p id ="city-not-found">{this.state.noResultText}</p>    
                    </div>
    
                    {/* for every zip code found, print it */}
                    {this.state.zipCodeData.map(zipCode=>{
                        // passing all the data values to another component
                        return (
                            //static city card 
                            <div id="city-card">
                                <h2>{zipCode.LocationText}</h2>
                                <div id ="city-info">
                                    <ul>
                                        <li id="zip">{zipCode.State}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
    
}

export default CityForm