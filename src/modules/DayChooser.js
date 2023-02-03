import React from 'react';

// import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import {Radio, Select} from 'antd';

const divStyles = {
    position: 'fixed',
    bottom: 0,
    display: 'grid',
    align: 'center',
    width: '100%',
    height: '5vh'
}

const selectStyles = {
    width: '100%',
    height: '100%'
}

export default function DayChooser(data) {

    const onChange = (e) => {
        data.setDay(e.target.value)
    }

    return (
        <div style={divStyles}>
            <Radio.Group onChange={onChange} defaultValue={0}>
                <Radio.Button value={0}>Пн</Radio.Button>
                <Radio.Button value={1}>Вт</Radio.Button>
                <Radio.Button value={2}>Ср</Radio.Button>
                <Radio.Button value={3}>Чт</Radio.Button>
                <Radio.Button value={4}>Пт</Radio.Button>
                <Radio.Button value={5}>Сб</Radio.Button>
                <Radio.Button value={6}>Вс</Radio.Button>
            </Radio.Group>
        </div>
    )
}