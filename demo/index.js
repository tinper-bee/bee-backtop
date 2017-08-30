
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基础实例","code":"/**\n *\n * @title 基础实例\n * @description 高度达到默认值时显示backtop\n *\n */\nimport React, {Component} from 'react';\nimport Backtop from 'tinper-bee';\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <div>\n                <p>让我掉下眼泪的</p>\n                <p>不止昨夜的酒</p>\n                <p>让我依依不舍的</p>\n                <p>不止你的温柔</p>\n                <p>雨路还要走多久</p>\n                <p>你攥着我的手</p>\n                <p>让我感到为难的</p>\n                <p>是挣扎的自由</p>\n                <p>分别总是在九月</p>\n                <p>回忆是思念的愁</p>\n                <p>深秋嫩绿的垂柳</p>\n                <p>亲吻着我额头</p>\n                <p>在那座阴雨的小城里</p>\n                <p>我从未忘记你</p>\n                <Backtop/>\n            </div>\n        )\n    }\n}\n\n","desc":" 高度达到默认值时显示backtop"},{"example":<Demo2 />,"title":" 指定dom的backtop","code":"/**\n *\n * @title 指定dom的backtop\n * @description 使用target属性传递指定dom\n *\n */\n\nimport React, {Component} from 'react';\nimport Backtop from 'tinper-bee';\n\nclass Demo2 extends Component {\n    render() {\n        return (\n            <div id=\"text\" className=\"demo-two\">\n                <p>和我在成都的街头走一走</p>\n                <p>直到所有的灯都熄灭了也不停留</p>\n                <p>你会挽着我的衣袖 </p>\n                <p>我会把手揣进裤兜</p>\n                <p>走到玉林路的尽头</p>\n                <p>坐在小酒馆的门口</p>\n                <p>分别总是在九月</p>\n                <p>回忆是思念的愁</p>\n                <p>深秋嫩绿的垂柳</p>\n                <p>亲吻着我额头</p>\n                <p>在那座阴雨的小城里</p>\n                <p>我从未忘记你</p>\n                <p>成都 带不走的 只有你</p>\n                <p>和我在成都的街头走一走</p>\n                <p>直到所有的灯都熄灭了也不停留</p>\n                <p>你会挽着我的衣袖 </p>\n                <p>我会把手揣进裤兜</p>\n                <p>走到玉林路的尽头</p>\n                <p>坐在小酒馆的门口</p>\n                <p>分别总是在九月</p>\n                <p>回忆是思念的愁</p>\n                <p>深秋嫩绿的垂柳</p>\n                <p>亲吻着我额头</p>\n                <p>在那座阴雨的小城里</p>\n                <p>我从未忘记你</p>\n                <p>成都 带不走的 只有你</p>\n                <p>和我在成都的街头走一走</p>\n                <p>直到所有的灯都熄灭了也不停留</p>\n                <p>你会挽着我的衣袖 </p>\n                <p>我会把手揣进裤兜</p>\n                <p>走到玉林路的尽头</p>\n                <Backtop target={() => document.getElementById('text')} character=\"UP\"/>\n            </div>\n        )\n    }\n}\n\n","desc":" 使用target属性传递指定dom"}]


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
