import React from 'react';
import './style/index.css';
export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
  }
  //返回按钮
  onLeftClick(){//接口封装的native返回方法
    if(this.props.onLeftClick){
      this.props.onLeftClick();
    }else{
      window.history.back();
    }
  }
  render() {
    return (
      <div className="upcore-navbar">
        <span className="upcore-navbar-icon-left" onClick={() => this.onLeftClick()}/>
        <div className="upcore-navbar-name-span" style={{padding: '0',backgroundColor:'#ffffff'}}>
          {this.props.title}
        </div>
      </div>
    );
  }
}