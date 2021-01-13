import './App.css';
import ZipCodeForm from "./Components/ZipCodeForm";
import CityForm from "./Components/CityForm"

function App() {
  return (
    <div>
      <div className="ZipCodeApp">
        <ZipCodeForm/>
      </div>
      <div className="CityApp">
        <CityForm/>
      </div>
    </div>
    
    
  );
}

export default App;
