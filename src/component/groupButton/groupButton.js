
import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import color from '../../constainers/color';
import styles from './styling';
type Props = {
    title: String
};
export default class GroupButton extends Component<Props> {
    static defaultProps = {
        type: "row"
    };
    render() {
        let {
            title
        } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                {this.props.children}
            </View>
        )
    }
}