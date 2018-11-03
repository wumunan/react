import React, { Component } from 'react'
import { SearchBar, Tabs } from 'antd-mobile'
import Recommended from '@/components/Recommended'

class Com extends Component {
  renderContent = tab =>
  (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    <p>Content of {tab.title}</p>
  </div>);
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
}

inputChange () {
  console.log( '1111')
  this.props.history.push('/search')
}
  render () {
    const tabs = [
      { title: '推荐' },
      { title: '家具' },
      { title: '家居' },
      { title: '活动' },
    ];
    return (
      <div className = "box">
       <header className = "header">
       <img src="http://m.wowdsgn.com/static/img/titleView.png" alt="" />
       <SearchBar placeholder="搜索我的尖叫好物" maxLength={8}   onFocus={this.inputChange.bind(this)} />
       </header>
      
        <div className="content">{
          <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={true}  swipeable = {false}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
             <Recommended />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              huodong
            </div>
          </Tabs>
        }
        </div>
      </div>
    )
  }
}

export default Com
