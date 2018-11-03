import React, { Component } from 'react'


class Com extends Component {
  constructor (props) {
    super (props)
    this.state = {
      list: []    
    }
  }
  componentDidMount () {
   console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    fetch('/jjsj/topic/'+id +'/products').then(res => res.json()).then(data =>{
      console.log(data.lists)
      this.setState({
        list: data.lists
       })
    }).catch(err => console.log(err))
  }

  render () {
    return (<ul className="detail">
      {
       this.state.list.map ((item, index) => {
        return (
        <li key={ index }>
        <img src = { item.productImg } alt="" style={{ width:'100%', height: '1.85rem'}} />
        <div className="detailTitle">
        <h4>{ item.productTitle }</h4>
        <span>￥{ item.sellPrice }</span>
        <p>{ item.prizeOrSlogan }</p>
        </div>
        </li>)
      })
      }
    </ul>
    )
  }
}

export default Com
