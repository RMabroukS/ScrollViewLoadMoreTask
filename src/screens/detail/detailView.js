
import React, { Component } from 'react'
import { View, Image,Text } from 'react-native'
import styles from './styling';
import { connect } from 'react-redux'
import { Header } from '../../component/header/header';
import { metrics, fonts } from '../../constainers/themes';
import color from '../../constainers/color';

type State = {

}
class DetailView extends Component<Props, State> {
    constructor(props) {
        super(props)
    }
    state = {

    };

    render() {
        let { list } = this.props
        let index = 
        this.props.navigation.getParam('index', false)
        return (
            <View
                style={styles.container}>
                <Header
                    title={'Detail'} />
                <View
                    style={styles.container}>
                    <Image
                        style={{ width: '100%', height: metrics.screenHeight * .3, resizeMode: 'cover' }}
                        source={{uri: list[index].image}} />
                        <Text style={{
                               color: color.darkGray,
                               fontSize: fonts.size.regular,
                               fontWeight: '500'
                        }}>{list[index].name}</Text>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.userReducer.list,
    }
}

export default
    connect(mapStateToProps)
        (DetailView)