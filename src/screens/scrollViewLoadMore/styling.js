import { StyleSheet } from 'react-native'
import { metrics } from '../../constainers/themes';
export default Style = StyleSheet.create({
    container: {
        width: metrics.screenWidth,
        height: metrics.screenHeight,
        alignItems: 'center',
    },
    scrollContainer:
    {
        width: metrics.screenWidth,
        height: metrics.screenHeight * .83,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'

    }
})