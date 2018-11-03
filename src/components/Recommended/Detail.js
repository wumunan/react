import React, { Component } from 'react'


class Com extends Component {
  constructor (props) {
    super (props)
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    // console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    fetch('/jjsj/pages/productGroup/'+id +'/products?pageNumber=' + 1).then(res => res.json()).then(data =>{
      // console.log(data.data.products)
      this.setState({
        list: data.data.products
       })
    }).catch(err => console.log(err))
  }

  render () {
    return (<ul className="detail">
      {
        this.state.list.map ((item, index) => {
          return (<li key={ index }>
          <img src = { item.productImg } alt="" style={{ width:'100%', height: '1.85rem'}}/>
          <div className="detailTitle">
          <h4>{ item.productTitle }</h4>
          <span>￥{ item.sellPrice }</span><span style={{ color:'#ccc', textDecoration: 'line-through'}}>￥{ item.originalPrice }</span>
          <p>{ item.productName }</p>
          </div>
          </li>)
        })
      }
    </ul>
    )
  }
}

export default Com
