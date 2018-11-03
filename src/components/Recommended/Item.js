import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import store from '@/store'


class Com extends Component {
  constructor (props) {
    super (props)
    this.state = {
      list: [],
      configList: []
    }
  }
  componentDidMount () {
  //  console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    const on = this.props.match.params.on
    fetch('/jjsj/itemdetail/spuInfos/' + on ).then(res => res.json()).then(data =>{
      // console.log(data.data.itemDetailIntroVoList)
      this.setState({
        list: data.data.itemDetailIntroVoList
       })
    }).catch(err => console.log(err))

    fetch('/jjsj/itemdetail/skuInfos/' + id).then(res => res.json()).then(data =>{
      // console.log(data.data.skuAttrPairs)
      this.setState({
        configList: data.data.skuAttrPairs
       })
    }).catch(err => console.log(err))


  }
  BackFn () {
    this.props.history.goBack()
  }
  addcartFn () {
    let arr = []
    const { headlist }  = store.getState().itemdata
    console.log(headlist)
  }
  render () {
    // console.log(store.getState().itemdata.headlist)
    const { headlist }  = store.getState().itemdata
    // console.log(headlist)
    if (this.state.list.length <= 0) {
      return (<div>加载中...</div>)
    }
    const arr = []
    if (headlist.supplyType === 0 ) {
     arr.push(
        <div className="headlist" key={ headlist.productType }>
          <img src={ headlist.productImg } alt=''  style={{ width: '100%', height: 'auto' }} />
          <ul>
            <h4>{ headlist.productTitle}</h4>
            <p><span>￥{ headlist.productId}</span></p>         
          </ul>
          </div>
      )
    }else if ( headlist.supplyType === 1 ) {
      arr.push(
      <div className="headlist" key={ headlist.productType } >
          <img src={ headlist.productImg } alt=''  style={{ width: '100%', height: 'auto' }} />
          <ul>
            <h4>{ headlist.productTitle}</h4>
            <p><span>￥{ headlist.productId}</span><span style={{ color:'#ccc', textDecoration: 'line-through', marginLeft: '0.1rem', fontSize: '0.12rem'}}>￥{ headlist.originalPrice}</span></p>
            <button style={{ background:'#f66', color:'#fff' ,border: 0 }}>三周年周庆</button>
          </ul>
          </div>
          )
    }
    return (
    <div className="detailsBox">
      <NavBar style={{ color: '#000', height: '0.44rem' }}
      mode="light"
      icon={<span style={{ color: '#000' }} className="iconfont icon-shouye" onClick={ this.BackFn.bind(this) }></span>}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px',color: '#000' }} />
      ]}
    >商品详情</NavBar>
    <div className="box">
    { arr } 
    <ul className="details">
      {
        this.state.list.map((item, index) => {
          switch (item.type ) {
            case 2:
            return (<img key={ index } src={ item.content } alt=''  style={{ width: '100%', height: 'auto' }} />)
            break;
            case 1:
            return (<p key={ index }>{ item.content }</p>)
            break;
            case 0:
            return (<h5 key={ index }>{ item.content }</h5>)
            break;
            default:return null;
          }
        })
      }
    </ul>
    <div className="congif">
    <h1>详细规格参数</h1>
    <ul>
      {
        this.state.configList.map((item, index) => {
          return (
            <li key={ index }><span style={{ width:'30%'}}>{ item.attributeName } </span><span style={{ width:'70%'}}>{ item.attributeValueText }</span></li>
          )
        })
      }
    </ul>
    </div>
    
    
    </div>
    <div className="foot">
    {  <ol className="foot1">
        <li><span className="iconfont icon-shoucang2"></span>
        <span className="iconfont icon-gouwuche"></span></li>
        <li onClick={ this.addcartFn.bind(this)}><a href="#">加入购物车</a></li>
        <li><button>立即购买</button></li>
      </ol>}
      </div>
    </div>
    )
  }
}

export default Com
