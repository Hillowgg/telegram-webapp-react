import React from 'react';


function parseData(data, styles) {
    return data.map((user, i) => {
        return (<div style={{...styles, gridColumn: i + 1}}>{user.name}</div>)
    })
}

export default function TopBar({data}) {
    const styles = {
        display: 'grid',
        // gridTemplateColumns: '1fr 1fr',
        gridAutoColumns: '1fr',
        gridGap: '0.5vh',
        height: 'var(--topbar-height)',
        width: '100%',
        position: 'fixed',
        zIndex: 1,
    }
    const divStyles = {
        backgroundColor: 'rgba(255,165,0, 0.5)',
        color: 'black',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '5vmin',
    }
    return (
        <header style={styles} className="topbar">
            {parseData(data, divStyles)}
        </header>
    )
}