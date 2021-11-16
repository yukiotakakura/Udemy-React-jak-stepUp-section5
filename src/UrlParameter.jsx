import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // ★セクション5(22) URLパラメーター URLパラメーターを取得
  const { id } = useParams();
  // ★セクション5(23) クエリパラメーター(=?以降のパラメーター)を取得する為の前準備
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      {/*  ★セクション5(22) URLパラメーター */}
      <p>パラメーター {id} です</p>
      {/*  ★セクション5(23) クリリパラメーターを出力 */}
      <p>クエリパラメーターは {query.get("name")}です</p>
    </div>
  );
};
