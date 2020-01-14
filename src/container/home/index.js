import React, { PureComponent } from 'react';
import {Tabs,Badge,SearchBar} from 'antd-mobile';
import data from '../../common/data';
import Singer from '../../common/user';
import {Navbar} from '../../component/navbar';
import {ChatRecord} from '../../component/chatRecord';
import {MyClient} from '../../component/myClient';
import './style/index.css';
const HOT_SINGER_LEN = 0;
const HOT_NAME = '热门';
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
    // 处理数据
    _normalizeUser(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          name: item.Fsinger_name,
          id: item.Fsinger_mid
        }))
      })
      // 为了得到有序列表，我们需要处理 map
      let ret = []
      let hot = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return ret
    }
  handleTabClick(tab,index){
    this.setState({
      initialPage:index
    });
  }
  render() {
    const {initialPage} = this.state;
    const shortcutData = this._normalizeUser(data);
    console.log(typeof(initialPage),initialPage);
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
            onTabClick={(tab, index) => this.handleTabClick(tab,index)}
            tabBarUnderlineStyle={tabBarUnderlineStyle3}
          >
            <div style={{ display: 'flex' }}>
              <ChatRecord />
            </div>
            <div style={{ display: 'flex' }}>
              <div className="myclient-wrap">
                <MyClient history={this.props.history}/>
              </div>
              
            </div>
          </Tabs>
          </div>
          <div className="myclient-shortcut" style={{display: initialPage === 0 ? 'none' : 'block'}}>
            <ul>
              {
                shortcutData.map((item,index)=>{
                  return (
                    <li key={index} className="shortcut-list">
                      {item.title}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;