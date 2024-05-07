import { lazy, Suspense } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

//构建的时候区分，如果是给app离线包使用的话需要是哈希路由，其它情况都是用history路由
const Router = process.env.PROJECT_MODE.includes("local_app")
  ? HashRouter
  : BrowserRouter;

function lazyLoad(moduleName: string) {
  const Module = lazy(() => import(`@/pages/${moduleName}`));
  return (
    <Suspense fallback={<div></div>}>
      <Module />
    </Suspense>
  );
}
// Route 的 index属性和path只能存在一个
export default () => {
  return (
    <Router>
      <div id="app-main">
        <div style={{ background: "#fff" }}>
          {/* <SafeArea position="top" /> */}
        </div>
        {/* <div className="app-top"></div> */}
        <div className="app-content">
          <Routes>
            <Route path="/" element={lazyLoad("Home")}></Route>
            <Route path="/apply" element={lazyLoad("Apply")}></Route>
            <Route path="/mine" element={lazyLoad("Mine")}></Route>
          </Routes>
        </div>
        {/* <div className="app-bottom">
        </div> */}
        <div style={{ background: "#fff" }}>
          {/* <SafeArea position="bottom" /> */}
        </div>
      </div>
    </Router>
  );
};
