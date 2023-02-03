
const gridStyles = {
    display: 'grid'
}

const timeLineStyles = {
    'grid-column': 1
}

export default function CalendarGrid() {
    retrun (
        <div style={gridStyles} className="CalendarGrid">
            <div style={timeLineStyles} className="TimeLine"> </div>
        </div>
    )
}