import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      {/*  ★セクション5(22) URLパラメーター */}
      <Link to="/page2/999">URL Parameter</Link>
      <br />
      {/*  ★セクション5(23) クエリパラメーター */}
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
