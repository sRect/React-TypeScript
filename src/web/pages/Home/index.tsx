import * as React from 'react';
import Header from '@web/components/Header';
import ReactHooksFetch from '@web/components/ReacthooksFetch';
import TodoList from '@web/components/MobxReactLite';

const Home = () => {
  return <>
    <Header />
    <ReactHooksFetch />
    <TodoList />
  </>
}

export default Home;