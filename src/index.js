import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '@/components/App';
import ErrorBoundary from '@/components/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import store from '@/store'
import './main.scss';
import Detail from '@/components/Recommended/Detail'
import Topic from '@/components/Recommended/Topic'
import Item from '@/components/Recommended/Item'
import Search from '@/components/Home/search'

render() // 一进来默认执行一次

// store.subscribe(render);
store.dispatch({
  type: 'CHANGE_HEADLIST',
  data: JSON.parse(localStorage.getItem('result'))
})

function render () {
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store = { store }>
      <Router>
        <Switch>
          <Route path='/search' component = { Search } />
          <Route path='/detail/:id' component = { Detail } />
          <Route path='/topic/:id' component = { Topic } />
          <Route path='/item/:id&:on' component = { Item } />
          <Route path='/' component = { App } />
        </Switch>
      </Router>
      </Provider>
    </ErrorBoundary>
    , document.getElementById('root'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
