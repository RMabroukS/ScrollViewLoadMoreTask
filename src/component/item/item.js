
import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import metrics from '../../constainers/themes/metrics';
import color from '../../constainers/color';
import fonts from '../../constainers/themes/fonts';
import PropTypes from 'prop-types';
import styles from './styling';

type Props = {
    title: String,
    description: string,
    type: "grid" | "row" | "column",
    uri: String,
    onPress?: (event: Function) => void
};
export default class Item extends Component<Props> {
    static defaultProps = {
        type: "row"
    };
    render() {
        let {
            title,
            description,
            type, uri,
            onPress
        } = this.props
        return (
            <TouchableOpacity
             onPress={onPress}
                style={styles.container(type)}>

                <Image
                    style={styles.image(type)}
                    source={{ uri }} />

                <View
                    style={styles.titleAndDescription}>

                    <Text
                        numberOfLines={1}
                        style={[styles.title]}>
                        {title}
                    </Text>

                    <Text
                        numberOfLines={1}
                        style={styles.description}>
                        {description}
                    </Text>

                    <TouchableOpacity
                        style={styles.button}>
                        <Text
                            numberOfLines={1}
                            style={styles.textButton}>
                            {'detail'}
                        </Text>
                    </TouchableOpacity>

                </View>
            </TouchableOpacity>
        )
    }
}