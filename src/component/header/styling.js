import { StyleSheet } from 'react-native'
import metrics from '../../constainers/themes/metrics';
import color from '../../constainers/color';
import fonts from '../../constainers/themes/fonts';

export default Style = StyleSheet.create({
    container: {
        width: metrics.screenWidth,
        height: metrics.screenHeight * .08,
        backgroundColor: '#3EA6FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: color.white,
        fontSize: fonts.size.regular,
        fontWeight: '500'
    }
})