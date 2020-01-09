import React, { PureComponent } from 'react';
import {Tabs,Badge,SearchBar} from 'antd-mobile';
import {Navbar} from '../../component/navbar';
import {ChatRecord} from '../../component/chatRecord';
import {MyClient} from '../../component/myClient';
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
      initialPage: 0
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
    return (
      <div>
        <Navbar />
        <SearchBar placeholder="Search" maxLength={8} />
         <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          tabBarUnderlineStyle={tabBarUnderlineStyle3}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <ChatRecord />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <MyClient />
          </div>
        </Tabs>
      </div>
    )
  }
}
export default Home;