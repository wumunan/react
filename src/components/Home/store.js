// 定义初始状态管理器
const data = (state = { // 初始状态值
  bannerlist: [],
  prolist: []
},action) => {
  const { type, data} = action
  switch (type) {
    case 'CHANGE_BANNERLIST':
    return {...state, bannerlist: data }
    case 'CHANGE_PROLIST':
    return {...state, prolist: data }
    default:
    return state
  }
}

export default data;