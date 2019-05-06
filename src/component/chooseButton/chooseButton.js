
import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import color from '../../constainers/color';
import styles from './styling';
type Props = {
    text: String,
    onPress?: (event: Function) => void
};
export default class chooseButton extends Component<Props> {
    static defaultProps = {
        type: "row"
    };
    render() {
        let {
            text,
            onPress
        } = this.props
        return (
            <TouchableOpacity 
            onPress={onPress} 
            style={styles}>
                <Text 
                style={styles.text}>
                {text}
                </Text>
            </TouchableOpacity>
        )
    }
}