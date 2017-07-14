import React, {Component, PropTypes} from 'react';
import Icon from 'bee-icon';
import classnames from 'classnames';
const propTypes = {
    visibilityHeight: PropTypes.number,
    click: PropTypes.func,
    target: PropTypes.func
};
const defaultProps = {
    visibilityHeight: 400,
    click: () => {
    },
    target: () => window,
    character: <Icon type="uf-top-up"/>,
};
class Backtop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.click = this.click.bind(this);
        this.scroll = this.scroll.bind(this);
    }

    componentDidMount() {
        this.scroll();
    }

    scroll() {
        let self=this;
        this.props.target().onscroll = function () {
            if ((self.props.target().scrollY||self.props.target().scrollTop) >= self.props.visibilityHeight) {
                self.setState({
                    show: true
                })
            }else{
                self.setState({
                    show: false
                });
            }
        }
    }

    click() {
        this.props.target().scrollTo?this.props.target().scrollTo(0, 0):this.props.target().scrollTop=0;
        this.setState({
            show: false
        });
        this.props.click();
    }

    render() {
        return (<span className={classnames({'u-backtop': true, 'hide': !this.state.show})} onClick={this.click}>
            {this.props.character}
        </span> )
    }
}
;
Backtop.propTypes = propTypes;
Backtop.defaultProps = defaultProps;
export default Backtop;