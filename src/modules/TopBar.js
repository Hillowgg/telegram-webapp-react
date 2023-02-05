import React from 'react';

export default function TopBar() {
    const styles = {
        backgroundColor: 'darkblue',
        color: 'white',
        height: '5vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 1,
    }
    return (
        <header style={styles} className="topbar">
            <nav>
                <h1>Расписание</h1>
            </nav>
        </header>
    )
}