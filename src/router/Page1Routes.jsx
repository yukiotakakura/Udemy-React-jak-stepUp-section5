import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

// ★セクション5(21) 「Page1配下」配列を定義
export const page1Routes = [
  {
    path: "/",
    exact: true, //★セクション5(19) ルーティングを完全一致にする
    children: <Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children: <Page1DetailB />
  }
];
