
import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import color from '../../constainers/color';
import styles from './styling';

export const Indicator = ({ isLoading }) => {
    return (
        isLoading ? <View style={styles.container}>
            <ActivityIndicator color={color.blue} size={30} />
        </View> : null
    )
}
