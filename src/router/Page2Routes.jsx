import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// ★セクション5(21) 「Page2配下」配列を定義
export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    // ★セクション5(22) URLパラメーター
    // urlパラメータを扱う場合は明示的に「:」をつける
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
