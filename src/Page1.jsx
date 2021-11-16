import { Link, useHistory } from "react-router-dom"; // ★セクション5(25) Linkを使わないページ遷移

export const Page1 = () => {
  // ★セクション5(25) stateを渡すページ遷移
  // ページ遷移時に一緒に値を渡す為の配列を宣言
  const arr = ["ヒロアカ", "ナルト", "ワンピース"];

  // ★セクション5(25) Linkを使わないページ遷移
  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailB");

  return (
    <div>
      <h1>Page1ページです</h1>
      {/*  ★セクション5(24) stateを渡すページ遷移/オブジェクト形式にすると値を渡すことができる */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      {/*  ★セクション5(25) Linkを使わないページ遷移  */}
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
