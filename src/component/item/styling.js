import { StyleSheet } from 'react-native'
import metrics from '../../constainers/themes/metrics';
import color from '../../constainers/color';
import fonts from '../../constainers/themes/fonts';

const type = 'row'
export default Style = {
    container: (type) => {
        return {
            width: metrics.screenWidth * (type == 'grid' ? .45 : .95),
            height: metrics.screenHeight * (type == 'grid' ? .3 : .15), margin: 10,
            borderRadius: 5,
            backgroundColor: color.white,
            elevation: 5, overflow: 'hidden',
            flexDirection: type == 'grid' ? 'column' : 'row'
        }
    },
    image: (type) => {
        return {
            flex: type == 'grid' ? 2.5 : 1.5
        }
    },
    titleAndDescription: {
        padding: 10, flex: 2
    },
    title: {
        color: color.darkGray,
        fontSize: fonts.size.regular,
        fontWeight: '500'
    },
    description: {
        color: color.gray,
        fontSize: fonts.size.small,
        fontWeight: '500',
        width: '95%'
    },
    button: {
        width: metrics.screenWidth * .4,
        height: metrics.screenHeight * .05,
        backgroundColor: color.blue,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: color.white,
        fontSize: fonts.size.small,
        fontWeight: '500'
    }
}
