
import React, { Component } from 'react'
import { Animated, TouchableOpacity, View } from 'react-native'
import color from '../../constainers/color';
import { Icons } from '../../constainers/icons';
import styles from './styling';
import { metrics } from '../../constainers/themes';
type Props = {
    text: String,
    onPress?: (event: Function) => void
};

type State = {
    animation: Animated,
    isOpen: Boolean
}
export default class AnimatedCard extends Component<Props, State> {
    state = {
        animation: new Animated.Value(metrics.screenWidth * .9),
        isOpen: false,
    };

    start = () => {
        let { animation, isOpen } = this.state
        Animated.timing(animation, {
            toValue: isOpen ? metrics.screenWidth * .9 : 0, duration: 600
        }).start(() => this.setState({ isOpen: !isOpen }))
    }
    render() {
        let { animation, isOpen } = this.state
        let rotate = animation.interpolate({
            inputRange: [
                0, metrics.screenWidth * .9
            ],
            outputRange: [
                '180deg', '0deg'
            ]
        })
        let radius = animation.interpolate({
            inputRange: [
                0, metrics.screenWidth * .9
            ],
            outputRange: [
                0, metrics.screenHeight * .1
            ]

        })
        return (
            <Animated.View
                style={[styles.container,
                    {
                        left: animation,
                        borderRadius: radius,
                    }]}>
                <TouchableOpacity
                    onPress={() => {
                        this.start()
                    }}>
                    <Animated.View
                        style={{ transform: [{ rotate }] }} >
                        <Icons
                            size={15}
                            style={{ margin: 20 }}
                            name='ios-arrow-back'
                            color={color.white} />
                    </Animated.View>
                </TouchableOpacity>
                <View
                    style={styles.content}>
                    {this.props.children}
                </View>
            </Animated.View>
        )
    }
}