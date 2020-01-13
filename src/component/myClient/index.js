import React, { PureComponent } from 'react'
import './style/index.css';
import data from '../../common/data';
// import Axios from '../../common/jsonp';
import Singer from '../../common/user';
const HOT_SINGER_LEN = 0
const HOT_NAME = '热门'
export class MyClient extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }
  componentDidMount(){
    this._normalizeUser(data);
    const userData = this._normalizeUser(data);
    this.setState({
      users: userData
    });
    this.setState({
      users: data
    })
  }
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

  render() {
    const data1 = this._normalizeUser(data);
    return (
      <div className="myclient-container">
        <ul>
          {
            data1.map((item,index)=>{
              return <div>
                <h2 className="myclient-title">{item.title}</h2>
                <li key={index}>
                <ul className="myclient-content">
                  {
                    item.items.map((item1,index1)=>{
                      return <li key={index1} className="">
                        <div>
                          <span className="myclient-avatar">
                            <img src={item1.avatar} alt="avatar"/>
                          </span>
                          <span className="name">{item1.name}</span>
                   
                        </div>
                        
                      </li>
                    })
                  }
                </ul>
              </li>
              </div>
            })
          }
        </ul>
      </div>
    );
  }
}