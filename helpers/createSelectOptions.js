import React from 'react'
import { Select } from 'antd';
const { Option } = Select;

export const createSelectOptions = (max, min=0) => {
    const children = [];
    for (let i = min; i <= max; i++) {
        children.push(<Option key={i}>{i}</Option>);
    }

    return children
}
