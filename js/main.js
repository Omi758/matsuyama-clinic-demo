import { switchViewport } from "./utility/viewport.js";
import { initializeHamburgerMenu } from "./component/hamburgermenu.js";
import { initializeSmoothScroll } from "./component/smoothscroll.js";

// 画面の幅に応じてビューポートの設定を切り替え
switchViewport();
window.addEventListener("resize", switchViewport);

// 各機能の初期化
initializeHamburgerMenu();

// スムーズスクロールの初期化
initializeSmoothScroll();
