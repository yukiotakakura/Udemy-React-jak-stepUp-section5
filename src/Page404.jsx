import { Link } from "react-router-dom";

// ★セクション5(26) 404ページを設定
export const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりません。</h1>
      <Link to="/">topに戻る</Link>
    </div>
  );
};
