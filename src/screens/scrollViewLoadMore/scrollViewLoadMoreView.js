
import React, { Component } from 'react'
import { View, ScrollView, Animated } from 'react-native'
import Item from '../../component/item/item';
import styles from './styling';
import ChooseButton from '../../component/chooseButton/chooseButton';
import GroupButton from '../../component/groupButton/groupButton';
import AnimatedCard from '../../component/animatedCard/animatedCard';
import { connect } from 'react-redux'
import { UserAction } from '../../actions/userAction';
import { Indicator } from '../../component/Indicator/Indicator';
import { Header } from '../../component/header/header';
import ScrollViewLoadMorePresenter from './scrollViewLoadMorePresenter';
import { strings, setAppLanguage } from '../../locals';

type Props = {
    isLoading: Boolean,
    list: Object
}
type State = {
    title: String,
    animation: Animated,
    isOpen: Boolean,
    type: String,
    page: Number
}
let { getList } = new UserAction()
class ScrollViewLoadMoreView extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.scrollViewLoadMorePresenter = new ScrollViewLoadMorePresenter(this);
    }
    state = {
        title: "App test",
        animation: new Animated.Value(0),
        isOpen: false,
        type: 'row',
        page: 1

    };
    componentWillMount() {
        let { page } = this.state
        this.props.getList({ page })
    }
    render() {
        let { isLoading, list, isFinsh } = this.props
        let { page } = this.state
        return (
            <View style={styles.container}>
                <Header title={this.state.title} />
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal={this.state.type == 'column'}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                        )}
                        onMomentumScrollEnd={({ nativeEvent }) => {
                            if (this.scrollViewLoadMorePresenter.isEnd(nativeEvent)) {
                                if (!isFinsh)
                                    this.setState((prvState) => (
                                        { page: prvState.page }), () => {
                                            this.props.getList({ page })
                                        })

                            }
                        }}
                        contentContainerStyle={styles.contentContainerStyle}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {list.map((item, index) => {
                            return (<Item
                                onPress={() => {
                                    this.props.navigation.navigate('detailView', { index: index })
                                }}
                                uri={item.image}
                                type={this.state.type}
                                title={item.name}
                                description={item.name}
                                key={index.toString()} />)
                        })}
                        <Indicator isLoading={isLoading} />
                    </ScrollView>
                </View>



                <AnimatedCard >
                    <GroupButton title='Type'>
                        <ChooseButton text='grid' onPress={() => {
                            this.setState({ type: 'grid' })
                        }} />
                        <ChooseButton text='row' onPress={() => {
                            this.setState({ type: 'row' })
                        }} />
                        <ChooseButton text='column' onPress={() => {
                            this.setState({ type: 'column' })
                        }} />
                    </GroupButton>

                    <GroupButton title='Language'>
                        <ChooseButton text={strings('arabic')} onPress={() => {
                            setAppLanguage('ar', true)

                        }} />
                        <ChooseButton text={strings('english')} onPress={() => {
                            setAppLanguage('en', true)
                        }} />
                    </GroupButton>

                </AnimatedCard>

            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.userReducer.list,
        isLoading: state.uiReducer.isLoading,
        isFinsh: state.uiReducer.isFinsh,
    }
}
function mapDispatchToProps(Dispatch) {
    return {
        getList: (filter) => Dispatch(getList(filter))
    }
}
export default
    connect(mapStateToProps,
        mapDispatchToProps)
        (ScrollViewLoadMoreView)