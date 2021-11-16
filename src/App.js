import { BrowserRouter, Link } from "react-router-dom"; // ルーティングを利用する為のコンポーネント
import { Router } from "./router/Router";

import "./styles.css";

export default function App() {
  return (
    // 「BrowserRouter」で囲った配下でルーティングを有効にすることができる
    <BrowserRouter>
      <div className="App">
        {/*  「Link」はhtmlで例えると<a></a>タグと同様 */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Router />
      </div>
    </BrowserRouter>
  );
}
