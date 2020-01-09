import React, { PureComponent } from 'react'
import {List} from 'antd-mobile';
import './style/index.css';
import Portrait from '../../assets/img/portrait.png';
const Item = List.Item;
const Brief = Item.Brief;
const data = [{
  title:'标题一',
  subtitle:'副标题一'
},{
  title:'标题二',
  subtitle:'副标题二'
},{
  title:'标题三',
  subtitle:'副标题三'
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