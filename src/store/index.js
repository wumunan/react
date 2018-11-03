import { createStore, combineReducers, applyMiddleware } from 'redux';
import homedata from '@/components/Home/store'
import thunk from 'redux-thunk'
import recommended from '@/components/Recommended/store'

const reducer = combineReducers({
  homedata, // 首页的内容
  recommended, // 推荐页面的状态管理
  itemdata: (state = { // 定义详情页的状态管理
    headlist: {}
  },action) => {
    const { type, data} = action
  switch (type) {
    case 'CHANGE_HEADLIST':
    return {...state, headlist: data }
    default:
    return state
  }
    
  }
});

const store = createStore(reducer, applyMiddleware(thunk)); // 有且只有一个，不用更改

export default store;