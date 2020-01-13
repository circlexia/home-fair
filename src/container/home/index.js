import React, { PureComponent } from 'react';
import {Tabs,Badge,SearchBar} from 'antd-mobile';
import {Navbar} from '../../component/navbar';
import {ChatRecord} from '../../component/chatRecord';
import {MyClient} from '../../component/myClient';
import './style/index.css';
const tabBarUnderlineStyle3 = {
  'color': '#2283E2',
  'height': '2px',
  'marginLeft': '22%',
  'width': '25px',
};
const tabs = [
  { title: <Badge>聊天记录</Badge> },
  { title: <Badge>我的客户</Badge> },
];
class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      initialPage: 1
    }
  }
    componentDidMount(){
    }
    onChange= (value) => {
      this.setState({ value });
    };
    clear = () => {
      this.setState({ value: '' });
    };
  

  render() {
    const {initialPage} = this.state;
    return (
      <div className="home-fair-container">
        <Navbar title="我是营养师"/>
        <div className="home-fair-content">
        <SearchBar placeholder="Search" maxLength={8} />
          <div className="home-fair-tab">
          <Tabs tabs={tabs}
            initialPage={initialPage}
            swipeable={false}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
            tabBarUnderlineStyle={tabBarUnderlineStyle3}
          >
            <div style={{ display: 'flex' }}>
              <ChatRecord />
            </div>
            <div style={{ display: 'flex',height: '100%' }}>
              <MyClient history={this.props.history}/>
            </div>
          </Tabs>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;