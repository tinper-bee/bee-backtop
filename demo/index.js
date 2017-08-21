
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Backtop from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
*
* @title 这是标题
* @description 这是描述
*
*/
class Demo1 extends Component {
render () {
return (
    <div>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
        <p>我为测试而生</p>
            <Backtop/>
    </div>
)
}
}/**
*
* @title 这是标题
* @description 这是描述
*
*/
class Demo2 extends Component {
render () {
return (
    <div id="text" className="demo-two" >
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
            <p>我为测试而生</p>
        <Backtop target={()=>document.getElementById('text')} character="UP"/>
    </div>
)
}
}var DemoArray = [{"example":<Demo1 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\nclass Demo1 extends Component {\nrender () {\nreturn (\n    <div>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n        <p>我为测试而生</p>\n            <Backtop/>\n    </div>\n)\n}\n}","desc":" 这是描述"},{"example":<Demo2 />,"title":" 这是标题","code":"/**\n*\n* @title 这是标题\n* @description 这是描述\n*\n*/\nclass Demo2 extends Component {\nrender () {\nreturn (\n    <div id=\"text\" className=\"demo-two\" >\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n            <p>我为测试而生</p>\n        <Backtop target={()=>document.getElementById('text')} character=\"UP\"/>\n    </div>\n)\n}\n}","desc":" 这是描述"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
