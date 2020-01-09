import React, { PureComponent } from 'react'
import './style/index.css';
// import axios from 'axios';
import data from '../../common/data';
import Axios from '../../common/jsonp';
export class MyClient extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  componentDidMount(){
    console.log(data);
    // this.getClientList();  
  }
  getClientList(){
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&jsonpCallback=data&platform=yqq';
    Axios.jsonp({url: url}).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log('2233');
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        通讯录内容
      </div>
    );
  }
}