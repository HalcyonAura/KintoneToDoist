import './App.css';
import { useState } from "react";
import LoadingSpinner from './components/spinner.js'

// Import the functions to make API calls
import getRecords from './requests/getRecords.js';
import postRecord from './requests/postRecord.js';

function App() {
  // Our hooks for data and setting that data.
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(1);
  const [completed, setCompleted] = useState();
  const [records, setRecords] = useState([]);

  // Submit button's onclick function. Calls POST request
  const submit = async () => {
    setLoading(true);
    let todoItem = {
      name: name,
      priority: priority,
      completed: completed
    }
    console.log(todoItem)
    if (name === "") {
      alert("At least pick a name...")
    } else {
      let response = await postRecord(todoItem);
      console.log(response)
    }
    setLoading(false);
  }

  // Get button's onClick function. Calls GET API request.
  const get = async () => {
    setLoading(true);
    let response = await getRecords();
    let todoItemArray = [];
    response.records.forEach((record, index) => {
      todoItemArray.push(<li key={index}>{record.name.value}, {record.priority.value}, {record.completed.value}</li>)
    });
    setRecords(todoItemArray);
    setLoading(false);
  }

  // Our react JSX.
  return (
    <div className="main">
      <h2>I Use Kintone!</h2>
      {/* If loading is true, show a spinner, otherwise show nothing. */}
      {loading ? (
        <div className="loadingDiv">
          <LoadingSpinner />
        </div>
      ) : null}
      Welcome to React and Kintone!
      <div className="selectDiv">
        <p>Type a name</p>
        <input
          value={name} // ...force the input's value to match the state variable...
          onChange={e => setName(e.target.value)} // ... and update the state variable on any edits!
        />
        <p>Then Pick a priority</p>
        <input type="range" min={1} max={3} step={1}
          value={priority} // ...force the input's value to match the state variable...
          onChange={e => setPriority(e.target.value)} // ... and update the state variable on any edits! needs number handling
        />
        <p>Lastly, is it completed?</p>
        <input type="checkbox"
          value={completed} // ...force the input's value to match the state variable...
          onChange={e => setCompleted(!completed)} // ... and update the state variable on any edits!
        />
      </div>
      <div className="submitDiv">
        <button onClick={submit} disabled={loading ? true : false}>
          Submit!
        </button>
        <button onClick={get} disabled={loading ? true : false}>
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