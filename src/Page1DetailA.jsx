import { useLocation, useHistory } from "react-router-dom"; //
export const Page1DetailA = () => {
  // ["ヒロアカ", "ナルト", "ワンピース"]
  // ※直前のページからstateを渡されたが、ここで再読込すると、useLocation()の仕様で再レンダリング値が消えてしまう。
  const { state } = useLocation();
  const stateLists = state.map((name, index) => {
    return <li key={index}>{name}</li>;
  });

  // ★セクション5(25) Linkを使わないページ遷移
  const history = useHistory();
  // 戻るボタン押下後の処理
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      {/*  ★セクション5(25) 戻るボタン */}
      <button onClick={onClickBack}>戻る</button>
      <ul>
        {/*  ★セクション5(24) stateを渡すページ遷移 */}
        {/*  ["ヒロアカ", "ナルト", "ワンピース"] */}
        {stateLists}
      </ul>
    </div>
  );
};
