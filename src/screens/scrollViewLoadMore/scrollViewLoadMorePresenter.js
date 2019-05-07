export default class ScrollViewLoadMorePresenter {
    constructor(ScrollViewLoadMoreView) {
        this.scrollViewLoadMoreView = ScrollViewLoadMoreView
    }

    isEnd = ({ layoutMeasurement, contentOffset, contentSize }) => {
        let { type } = this.scrollViewLoadMoreView.state
        const padding = 20
        let dim = type == 'column' ? 'width' : 'height'
        let XY = type == 'column' ? 'x' : 'y'
        return layoutMeasurement[dim] + contentOffset[XY] >=
            contentSize[dim] - padding
    }
}