import React, { PureComponent } from 'react'
import './style/index.css';
import axios from 'axios';
export class MyClient extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  componentDidMount(){
    this.getClientList();  
  }
  getClientList(){
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&jsonpCallback=jp0';
    axios.get(url).then(res=>{
      console.log(res);
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