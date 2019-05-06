import { metrics } from "../../constainers/themes";

export default {
    container: {
        width: metrics.screenWidth,
        height: metrics.screenHeight * .15,
        backgroundColor: 'rgba(62, 166, 255,.8)',
        position: 'absolute',
        top: metrics.screenHeight * .1,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    content: {
        width: '87%',
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
}