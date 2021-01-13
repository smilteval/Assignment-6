export default function ZipCodeCityCard(props) {

    //values passed from the ZipCodeForm component
    let {
        LocationText,
        State,
        Lat,
        Long,
        EstimatedPopulation,
        TotalWages,
    } = props;

    return (
        //static city card 
        <div id="city-card">
            <h2>{LocationText}</h2>
            <div id ="city-info">
                <ul>
                    <li id="state">State: {State}</li>
                    <li id="location">Location: ({Lat},{Long})</li>
                    <li id="population">Population (estimated): {EstimatedPopulation}</li>
                    <li id="wages">Total Wages: {TotalWages}</li>
                </ul>
            </div>
        </div>
    )
}
