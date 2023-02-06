import React from 'react';
import Color from 'color';


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
            marginTop: margin + 5 + 'px',
            height: height + 'px',
            width: '100%',
            borderRadius: '5px',
            backgroundColor: color.alpha(0.5).toString(),
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            borderLeft: '5px solid ' + color.toString(),
            position: 'relative',
            fontSize: '3vmin',
            wordWrap: 'break-word',
            wordBreak: 'break-all'
        }

        const stylesStart = {
            position: 'absolute',
            top: 0,
            left: 0,
            margin: '1px',
            fontSize: '1.5vmin'

        }

        const stylesEnd = {
            position: 'absolute',
            bottom: 0,
            right: 0,
            margin: '1px',
            fontSize: '1.5vmin'
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


const parseData = (data, day, weekParity) => {
    const result = data.map((user, i) => {
        return (
            <div style={{gridColumn: i + 1}}>
                {parseDay(user.weeks[weekParity][day], Color(user.color))}
            </div>
        )
    })
    return result;
}

export default function Calendar({data, day, weekParity}) {
    console.log(parseData(data, day, weekParity));
    const calendarStyles = {
        display: 'grid',
        // gridTemplateColumns: '1fr 1fr',
        gridAutoColumns: '1fr',
        gridGap: '0.5vh',
        height: '3600px',
        marginTop: 'var(--topbar-height)',
        marginBottom: 'var(--daychoosing-height)'
    }

    return (
        <div style={calendarStyles} className="Calendar">
            {parseData(data, day, weekParity)}
        </div>
    )
}