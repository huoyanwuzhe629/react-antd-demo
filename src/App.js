import React, {Component} from 'react';
import Header from './component/layout/Header';
import Main from './component/Main';
import Footer from './component/layout/Footer';

class App extends Component {
    render() {
        const {children} = this.props;
        //app由layout（布局）和content（内容）组成，
        //layout中有头部导航栏和底部栏组成，不受路由变化影响
        //content中的内容由路由控制显示内容，比如访问根路由'/'，则会加载Home组件
        return (
            <div className="app-wrap">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App

