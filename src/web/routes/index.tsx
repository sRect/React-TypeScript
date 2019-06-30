import React, {lazy, Suspense, Fragment} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Loading from '@web/components/Loading';

import Home from '@web/pages/Home'; // 同步组件
const About = lazy(() => import('@web/pages/About')); // 组件懒加载

const RouterConfig = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/about" component={About} ></Route>
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  )
}

export default RouterConfig;