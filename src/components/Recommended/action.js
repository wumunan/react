const action = {
  getbannerlist: (dispatch) => {
    fetch('/jjsj/v2/page?pageId=1&tabId=1&_=1540098720872').then(res => res.json()).then(data => {
      // console.log(data.data.modules[0].moduleContent.banners)
      setTimeout(() => {
        dispatch({
          type: 'CHANGE_BANNERLIST',
          data: data.data.modules[0].moduleContent.banners
        })
      }, 1000)
    }).catch(err => console.log(err))
  },
  getprolist: (dispatch) => {
    fetch('/jjsj/v2/page?pageId=1&tabId=1&_=1540098720872').then(res => res.json()).then(data => {
      console.log(  data.data.modules.slice(1) )
      setTimeout(() => {
        dispatch({
          type: 'CHANGE_PROLIST',
          data: data.data.modules.slice(1)
        })
      }, 1000)
    }).catch(err => console.log(err))
  }
}

export default action