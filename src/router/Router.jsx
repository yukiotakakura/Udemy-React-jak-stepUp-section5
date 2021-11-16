import { Switch, Route } from "react-router-dom"; // ルーティングを利用する為のコンポーネント
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    // 「Switch」コンポーネントはlaravelで例えるとweb.phpと同様。※v6から書き方変わる
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/*  Page1のルートを追加 */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {/*  ★セクション(20)(21) ルート定義の分割 */}
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      {/*  Page2のルートを追加 */}
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {/*  ★セクション5(20)(21) ルート定義の分割 */}
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      {/*  上記のどのルートに当てはまらない場合 */}
      {/*  ★セクション5(26) 404ページを設定 */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
