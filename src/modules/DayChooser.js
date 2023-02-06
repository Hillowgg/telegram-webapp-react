import React from 'react';

import {ConfigProvider, Radio, Switch} from 'antd';


export default function DayChooser(props) {

    const onWeekDayChange = (e) => {
        props.setDay(e.target.value)
    }
    const weekParityToggler = () => {
        props.setWeekParity(props.weekParity === 'odd' ? 'even' : 'odd')
    }

    const mainDivStyles = {
        position: 'fixed',
        bottom: 0,
        display: 'grid',
        gridTemplateColumns: '2fr 12fr',
        align: 'center',
        width: '100%',
        height: 'var(--daychoosing-height)',
    }

    const radioGroupStyles = {
        padding: '0',
        margin: '0',
        color: 'orange'
    }


    const switchStyles = {
        backgroundColor: 'orange',
        fontFamily: 'serif'
    }

    const theme = {
        token: {
            colorPrimary: 'orange',
        }
    }

    return (
        <div style={mainDivStyles}>

            <Switch style={switchStyles} checkedChildren="II" unCheckedChildren="I" onChange={weekParityToggler}
            />
            <ConfigProvider theme={theme}>
                <Radio.Group style={radioGroupStyles} onChange={onWeekDayChange} defaultValue={0}>
                    <Radio.Button value={0}>Пн</Radio.Button>
                    <Radio.Button value={1}>Вт</Radio.Button>
                    <Radio.Button value={2}>Ср</Radio.Button>
                    <Radio.Button value={3}>Чт</Radio.Button>
                    <Radio.Button value={4}>Пт</Radio.Button>
                    <Radio.Button value={5}>Сб</Radio.Button>
                    <Radio.Button value={6}>Вс</Radio.Button>
                </Radio.Group>
            </ConfigProvider>
        </div>
    )
}