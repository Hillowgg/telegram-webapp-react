import React from 'react';
// import {useState} from "react";

const gridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '1vh',
    height: '3600px',
}

function countPos(prevEnd, start, end) {
    let startTime = 0;
    let endTime = 0;

    start.split(':').map((time, index) => {
        startTime += time * (index === 0 ? 60 : 1);
        return time;
    })
    end.split(':').map((time, index) => {
        endTime += time * (index === 0 ? 60 : 1);
        return time;
    })

    return [startTime - prevEnd, endTime - startTime];
}

function parseDay(day, color) {

    let divs = [];
    let prevEnd = 0;

    day.map((task) => {
        let [margin, height] = countPos(prevEnd, task.start, task.end);

        prevEnd = margin + prevEnd + height + 4;

        const styles = {
            marginTop: margin + 'px',
            height: height + 'px',
            width: '100%',
            borderRadius: '5px',
            backgroundColor: 'rgba(' + color + ', 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            borderLeft: '5px solid rgb(' + color + ')',
            position: 'relative',
        }

        const stylesStart = {
            position: 'absolute',
            top: 0,
            left: 0,
            margin: '1px',
            fontSize: '10px'
        }

        const stylesEnd = {
            position: 'absolute',
            bottom: 0,
            right: 0,
            margin: '1px',
            fontSize: '10px'
        }


        divs.push(
            <div style={styles}>
                <h6 style={stylesStart}> {task.start}</h6>
                <div>
                    {task.task}
                </div>
                <h6 style={stylesEnd}>{task.end}</h6>
            </div>
        )
        return task;
    })
    return divs;
}

export default function Calendar(data) {

    const example = [
        {
            id: 1, name: 'Вася',
            days: [
                [
                    {task: "Умыться", start: "0:00", end: "1:00"},
                    {task: "Проснуться", start: "5:00", end: "6:00"},
                    {task: "Проснуться", start: "8:00", end: "8:30"},
                    {task: "Поесть", start: "8:40", end: "9:10"},
                    {task: 'лень', start: '9:10', end: '10:30'},
                ],
                [
                    {task: "Поучиться", start: "10:30", end: "14:15"},
                ]
            ]
        },
        {
            id: 2, name: 'Петя', days: [
                [
                    {task: "Умыться", start: "2:00", end: "2:20"},
                    {task: "Проснуться", start: "5:00", end: "6:00"},
                    {task: "Умыться", start: "8:00", end: "8:30"},
                    {task: "Поесть", start: "8:40", end: "9:10"},
                    {task: 'лень', start: '9:10', end: '10:30'},
                    {task: "Поучиться", start: "10:30", end: "14:15"},
                ], [
                    {task: "Поучиться", start: "11:30", end: "14:15"},
                ]

            ]
        }
    ]

    return (
        <div style={gridStyles} className="Calendar">
            <div style={{gridColumn: '1'}}>
                {parseDay(example[0].days[data.day], '185, 61, 113')}
            </div>
            <div style={{gridColumn: '2'}}>
                {parseDay(example[1].days[data.day], '88, 186, 158')}
            </div>
        </div>
    )
}