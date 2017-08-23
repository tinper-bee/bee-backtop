import React, {Component, PropTypes} from 'react';
import Icon from 'bee-icon';
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
    clsPrefix: 'u-backtop',
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
        let self = this;
        this.props.target().onscroll = function () {
            if ((self.props.target().scrollY || self.props.target().scrollTop) >= self.props.visibilityHeight) {
                self.setState({
                    show: true
                })
            } else {
                self.setState({
                    show: false
                });
            }
        }
    }

    click() {
        let height=this.props.target().scrollY||this.props.target().scrollTop;
        let timer=(height)=>{
            let self=this;
            let h=Math.floor(height/3);
            self.props.target().scrollTo ? self.props.target().scrollTo(0, h) : self.props.target().scrollTop = h;
            if(h>0){
                window.clearInterval(window.backTopTimer);
                window.backTopTimer=window.setInterval(()=>{
                    timer(h);
                },30);
            }else{
                this.setState({
                    show: false
                });
                window.clearInterval(window.backTopTimer);
                return;
            }
        };
        timer(height);
        this.props.click();
    }

    render() {
        let {className, children, visibilityHeight, click, target, character,clsPrefix, ...others} = this.props;
        className = className ? className : '';
        className = !this.state.show ? clsPrefix+' hide ' + className : clsPrefix+' ' + className;
        return (
            <span {...others} className={className} onClick={this.click}>
                    {children ? children : this.props.character}
                </span>
        )
    }
}
;
Backtop.propTypes = propTypes;
Backtop.defaultProps = defaultProps;
export default Backtop;