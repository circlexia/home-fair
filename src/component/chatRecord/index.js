import React, { PureComponent } from 'react'
import {List} from 'antd-mobile';
import './style/index.css';
import Portrait from '../../assets/img/portrait.png';
const Item = List.Item;
const Brief = Item.Brief;
const data = [{
  title:'张先生',
  subtitle:'【未读】今天没来得及吃饭'
},{
  title:'王先生',
  subtitle:'【已读】非常感谢您的推荐'
},{
  title:'李先生',
  subtitle:'【未读】欢迎下次再来'
}]
export class ChatRecord extends PureComponent {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="chat-record-contain">
        <List className="my-list">
          {
            data.map((item,index)=>{
              return <Item
                key={index}
                arrow="horizontal"
                thumb={Portrait}
                multipleLine
                onClick={() => {}}>
                  {item.title} <Brief>{item.subtitle}</Brief>
              </Item>
            })
          }
        </List>
      </div>
    );
  }
}