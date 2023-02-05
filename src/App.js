import React, {useState} from 'react';

import './App.css';

import Calendar from "./modules/Calendar";
import TopBar from "./modules/TopBar";
import DayChooser from "./modules/DayChooser";

function App() {
    let [day, setDay] = useState(0);

    return (
        <div className="App">
            <TopBar />
            <Calendar day={day}/>
            <DayChooser setDay={setDay}/>
        </div>
    );
}

export default App;
