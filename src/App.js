import './App.css';
import { useState } from "react";
import { Country, State, City } from "country-state-city";
import Select from 'react-select'
import LoadingSpinner from './components/spinner.js'
import CountryPicker from './components/countryPicker.js'
import StatePicker from './components/statePicker.js'
import CityPicker from './components/cityPicker.js'

// Import the script to make GET API calls
import getRecords from './requests/getRecords.js';
import postRecord from './requests/postRecord.js';

function App() {
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [records, setRecords] = useState([]);

  const submit = async () => {
    setLoading(true);
    let location = {
      country: selectedCountry.name,
      state: selectedState.name,
      city: selectedCity.name
    }
    let response = await postRecord(location);
    setLoading(false);
  }

  const get = async () => {
    setLoading(true);
    let response = await getRecords();
    let locationArray = [];
    console.log(response);
    response.records.forEach(record => {
      locationArray.push(<li>{record.country.value}, {record.state.value}, {record.city.value}</li>)
    });
    setRecords(locationArray);
    console.log(records)
    setLoading(false);
  }

  return (
    <div className="main">
      {loading ? (
        <div className="loadingDiv">
          <LoadingSpinner />
        </div>
      ) : null}
      Welcome to React and Kintone!
      <div className="selectDiv">
        <p>Pick a Country</p>
        <CountryPicker selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
        <p>Then Pick a State</p>
        <StatePicker selectedCountry={selectedCountry} selectedState={selectedState} setSelectedState={setSelectedState}/>
        <p>Lastly, Pick a City</p>
        <CityPicker selectedState={selectedState} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
      </div>
      <div className="submitDiv">
        <button onClick={submit}>
          Submit!
        </button>
        <button onClick={get}>
          Get!
        </button>
      </div>
      <div className="listRecordsDiv">
        <ul>{records}</ul>
      </div>
    </div>
  );
}

export default App;
