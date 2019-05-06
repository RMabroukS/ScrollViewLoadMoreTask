

import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styling';

export const  Header = ({ title }) => {
    return (
        <View
            style={styles.container}>
            <Text
                style={styles.title}>
                {title}
            </Text>
        </View>
    )

}
