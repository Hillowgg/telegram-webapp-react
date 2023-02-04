import React, {useState} from 'react';

import './App.css';
import Calendar from "./modules/Calendar";

import DayChooser from "./modules/DayChooser";

function App() {
    let [day, setDay] = useState(0);

    return (
        <div className="App">
            <Calendar day={day}/>
            <DayChooser setDay={setDay}/>
        </div>
    );
}

export default App;
