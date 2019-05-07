
import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import color from '../../constainers/color';
import styles from './styling';

type Props = {
    isLoading: Boolean,
};

export function Indicator(props: Props) {
    return (
        props.isLoading ? <View style={styles.container}>
            <ActivityIndicator color={color.blue} size={30} />
        </View> : null
    )
}
