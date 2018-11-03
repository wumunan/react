import Home from '@/components/Home';
import Kind from '@/components/Kind';
import User from '@/components/User';
import Cart from '@/components/Cart';
import Msg from '@/components/Msg';
import Detail from '@/components/Recommended/Detail'
import Topic from '@/components/Recommended/Topic'
import Item from '@/components/Recommended/Item'

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/topic/:id',
    component: Topic
  },
  {
    path: '/item/:id&:on',
    component: Item
  }
];

export default routes;
