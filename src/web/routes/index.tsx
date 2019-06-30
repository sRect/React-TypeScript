import React, {lazy, Suspense, Fragment} from 'react';
import {BrowserRouter, Switch, Route, Redirect, RouteProps} from 'react-router-dom';
import Loading from '@web/components/Loading'; // 同步组件

const Home = lazy(() => import('@web/pages/Home')); // 组件懒加载
const About = lazy(() => import('@web/pages/About'));

const routes: RouteProps[] = [
  { path: '/', exact: true, component: Home },
  { path: '/about', exact: true, component: About },
];

const RouterConfig = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Switch>
            {
              routes.map(route => {
                const { path, exact, component} = route;
                return <Route path={path} exact={exact} component={component} />
              })
            }
            {/* <Route exact path="/" component={Home} ></Route>
            <Route exact path="/about" component={About} ></Route> */}
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  )
}

export default RouterConfig;