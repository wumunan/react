import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile'

class Com extends Component {
  constructor (props) {
    super (props)
    this.state = {
      value: '',
      lists: []
    }
  }

  SearchFn (value) {
   this.setState({ value: value}) 
   console.log(value)
	}
 
  render () {
    let arr = [] 
 
  
 
    return (
    <div className="searchBox">
     <div className="searchhead">
     <SearchBar placeholder="搜索我的尖叫好物" maxLength={8}  onChange={ this.SearchFn.bind(this) } />
     <span className="iconfont icon-shouye"></span>
     </div>
     <div className="searchCon" id="searchCon">
     <div className="hot">
     <p>热门搜索</p>
     <div className="keyword"><span>尖叫设计</span></div>
     <div className="keyword"><span>暖手宝</span></div>
     <div className="keyword"><span>沙发</span></div>
     <div className="keyword"><span>杯子</span></div>
     <div className="keyword"><span>餐具</span></div>
     <div className="keyword"><span>茶具</span></div>
     <div className="keyword"><span>吊灯</span></div>
     <div className="keyword"><span>厨房</span></div>
     <div className="keyword"><span>儿童</span></div>
     <div className="keyword"><span>HAY</span></div>
     <div className="keyword"><span>Arabia</span></div>
     <div className="keyword"><span>家饰</span></div>
     <div className="keyword"><span>收纳</span></div>
     <div className="keyword"><span>床上用品</span></div>
     <div className="keyword"><span>旅行</span></div>
     </div>

     <div className="history">
     <p>历史搜索</p>
     <div className="keyword"><span>{ arr }</span></div>
     </div>
     </div>
    </div>
    
    )
  }
}

export default Com
