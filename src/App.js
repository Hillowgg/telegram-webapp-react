import React, {useState} from 'react';

import './App.css';

import Calendar from "./modules/Calendar";
import TopBar from "./modules/TopBar";
import DayChooser from "./modules/DayChooser";

// const webApp = window.Telegram.WebApp;

// function validateInitData(data) {
//     const req = JSON.stringify({type: 'validateInitData', data: data});
//
// }

const example = [{
    id: 1, name: 'Вася', color: '#2cc998', weeks: {
        'odd': [[{task: "Умыться", start: "0:00", end: "1:00"}, {
            task: "Проснутьkjkjkjkkkkkkkkkkkkkkkkkся",
            start: "5:00",
            end: "6:00"
        }, {task: "Проснуться", start: "8:00", end: "8:30"}, {
            task: "Поесть d d d d d  d d d",
            start: "8:40",
            end: "9:10"
        }, {task: 'лень', start: '9:10', end: '10:30'},], [{
            task: "Поучиться",
            start: "10:30",
            end: "14:15"
        },], [], [], [], [], []],
        'even': [[], [], [], [], [], [], []]
    },
}, {
    id: 2, name: 'Петя', color: '#eb4034', weeks: {
        'odd': [[
            {task: "Умыться", start: "0:00", end: "1:00"},
            {task: "Проснуться", start: "5:00", end: "6:00"},
            {task: "Проснуться", start: "8:00", end: "8:30"},
            {task: "Поесть", start: "8:40", end: "9:10"},
            {task: 'лень', start: '9:10', end: '10:30'},
        ],
            [
                {task: "Поучиться", start: "10:30", end: "14:15"},
            ], [], [], [], [], []], 'even': [[], [], [], [], [], [], []]
    },


},
    {
    id: 1, name: 'Вася', color: '#2cc998', weeks: {
        'odd': [[{task: "Умыться", start: "0:00", end: "1:00"}, {
            task: "Проснуться",
            start: "5:00",
            end: "6:00"
        }, {task: "Проснуться", start: "8:00", end: "8:30"}, {
            task: "Поесть",
            start: "8:40",
            end: "9:10"
        }, {task: 'лень', start: '9:10', end: '10:30'},], [{
            task: "Поучиться",
            start: "10:30",
            end: "14:15"
        },], [], [], [], [], []],
        'even': [[], [], [], [], [], [], []]
    },
}
]


const data = example

function App() {
    let [day, setDay] = useState(0);
    let [weekParity, setWeekParity] = useState('odd');


    return (<div className="App">
        <TopBar data={data}/>
        <Calendar data={data} day={day} weekParity={weekParity}/>
        <DayChooser setDay={setDay} weekParity={weekParity} setWeekParity={setWeekParity}/>
    </div>);
}

export default App;
