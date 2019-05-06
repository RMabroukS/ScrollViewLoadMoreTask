import React, { Component } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {
    name: 'iosArrowDown' | 'menu' | 'ios-arrow-back',
    size: Number,
    color: String,
    style: Object
}
export class Icons extends Component<Props>{
    render() {
        let { name, size, color,style } = this.props
        return (
            name == 'ios-arrow-back' &&
            <Ionicons
                style={style}
                name="ios-arrow-back"
                size={size}
                color={color}
            />
        )
    }

}