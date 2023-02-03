import React from 'react';

// import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import { Form, Select } from 'antd';

export default function DayChooser() {
    return (
        <div className="DayChooser">
            <Select defaultValue={'Monday'}>
                <Select.Option value={'Monday'}>Monday</Select.Option>
                <Select.Option value={'Tuesday'}>Tuesday</Select.Option>
                <Select.Option value={'Wednesday'}>Wednesday</Select.Option>
                <Select.Option value={'Thursday'}>Thursday</Select.Option>
                <Select.Option value={'Friday'}>Friday</Select.Option>
                <Select.Option value={'Saturday'}>Saturday</Select.Option>
                <Select.Option value={'Sunday'}>Sunday</Select.Option>
            </Select>
        </div>
    )
}