import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { Link } from 'react-router-dom'
import store from '@/store'

class Com extends Component {
componentDidMount () {
  this.props.getdata()
}

addfn (itm) {
  localStorage.setItem('result',JSON.stringify(itm))
  store.dispatch({type:'CHANGE_HEADLIST', data: itm}) // 改变状态管理
  // console.log(itm)
}
  render () {
    if (this.props.bannerlist.length <= 0) {
      return (<div>加载中...</div>)
    }

    return (
        <div style={{ width:'100%',height:'100%' }}>{
          <div>
        <Carousel
          autoplay={ true }
          infinite
        >
          {this.props.bannerlist.map((item, index) => (
            <div
              key={index}
              style={{ display: 'inline-block', width: '100%', height: '100%' }}
            >
              <img
                src={ item.bannerImgSrc }
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </div>
          ))}
        </Carousel>
        </div>
        }
         <div>
         { 
          this.props.prolist.map ((item, index)=>{
           switch( item.moduleType) {
             case 102: return (
               <div key={ index } className="result">
               <h3 className="title">{ item.moduleName }</h3>
               <p className="tit">{ item.moduleDescription }</p>
               <img src={ item.moduleContent.banners[0].bannerImgSrc } alt=''  style={{ width: '100%', height: 'auto' }}/>
             </div>
             ); 
             case 107: return (
              <div key={ index } className="result">
              <h3 className="title">{ item.moduleName }</h3>
              <p className="tit">{ item.moduleDescription }</p>
              <Link key ={ index } to={ '/topic/' + item.moduleContent.banners[0].bannerLinkTargetId }><img src={ item.moduleContent.banners[0].bannerImgSrc } alt=''  style={{ width: '100%', height: 'auto' }}/></Link>
              <ul className="bot" >
                  {
                    item.moduleContent.products.map((itm, idex) => {
                      return (
                      <Link onClick={ this.addfn.bind(this,itm ) } to={ '/item/' + itm.productId +'&' + itm.parentProductId } key={ idex }><img src={ itm.productImg } alt=''  style={{ width: '1.08rem', height: 'auto' }} />
                          <h5>{  itm.productTitle }</h5>
                          <p>￥{  itm.sellPrice }</p>
                      </Link>)
    
                    })
                  }
              </ul>
            </div>
             ); break;
             case 401: return (
              <div key={ index } className="result">
              <h3 className="title">{ item.moduleName }</h3>
              <p className="tit">{ item.moduleDescription }</p>
              <ul className="bot1">
              {
                item.moduleContent.products.map((ite, ind) => {
                  return (
                  <Link onClick={ this.addfn.bind(this,ite ) } to={ '/item/' + ite.productId +'&' + ite.parentProductId }  key={ ind }><img src={ ite.productImg } alt=''  style={{ width: '1.08rem', height: 'auto' }} />
                      <h4>{  ite.productTitle }</h4>
                      <span>￥{  ite.sellPrice }</span><span style={{ color:'#ccc', textDecoration: 'line-through'}}>￥{  ite.originalPrice }</span>                  </Link>)

                })
              }
              </ul>
              <div className="word">
               <Link key={ index } to={ '/detail/' + item.moduleContent.id }>查看全部<span className="iconfont icon-jiantou"></span></Link>
              </div>
            </div>
             ); break;
             default:return null;
           }
          })
        }
         </div>
        </div>
    )
  }
}

export default Com
