// @flow

import React from 'react';
import { applyRouterMiddleware, browserHistory, Router, Route, IndexRoute } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { kebabCase, titleize } from 'training/src/utils/helpers';
import AppFrame from 'training/src/components/AppFrame';
// import AppContent from 'training/src/components/AppContent';
// import MarkdownDocs from 'training/src/components/MarkdownDocs';
import Home from 'training/src/pages/Home';
// import { componentAPIs, requireMarkdown, demos, requireDemo } from 'training/src/components/files';

import Enrolled from '../pages/company/enrolled/enrolled.page.js';
import CompanyHome from '../pages/company/home/home.page.js';
import Students from '../pages/company/students/students.page.js';
import Exams from '../pages/company/exams/exams.page.js';
import Infos from '../pages/company/infos/info.page.js';


export default function AppRouter() {

  return (
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
      <Route title="Material-UI" path="/" component={AppFrame}>
        <IndexRoute dockDrawer title={null} nav component={Home} />

        {/* <Route title="企业账号" path="/company" nav > */}
        <Route
          title={titleize("首页")}
          path={'/company/home'}
          nav component={CompanyHome}
        />
        <Route
          title={titleize("企业信息")}
          path={'/company/infos'}
          content={Infos}
          nav component={Infos}
        />
        <Route
          title={titleize("学生")}
          path={'/company/students'}
          content={Students}
          nav component={Students}
        />
        <Route
          title={titleize("报名")}
          path={'/company/enrolled'}
          content={Enrolled}
          nav component={Enrolled}
        />
        <Route
          title={titleize("考试")}
          path={'/company/exams'}
          content={Exams}
          nav component={Exams}
        />
        {/* </Route> */}
      </Route>
    </Router>
  )



}
