
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/ConfigStore';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import ScrollViewLoadMoreView from './screens/scrollViewLoadMore/scrollViewLoadMoreView';
import DetailView from './screens/detail/detailView';
export default class Main extends Component {
    render() {
        return (
            <Provider store={configureStore}>
                <MainApp />
            </Provider>
        );
    }
}

const MainStack = createStackNavigator({
    ScrollViewLoadMoreView: { screen: ScrollViewLoadMoreView },
    detailView:{screen:DetailView}
}, {
        headerMode: 'none'
    })
const MainApp = createAppContainer(MainStack)