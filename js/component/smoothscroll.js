export const initializeSmoothScroll = () => {
  // 固定ヘッダー要素を取得
  const header = document.querySelector(".header");
  const headerHeight = header ? header.offsetHeight : 0;

  // スムーズスクロールの対象となるアンカーリンクを取得（#で始まるhref）
  const links = document.querySelectorAll('a[href^="#"]');

  // 取得した各リンクに対してクリックイベントを設定
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      // デフォルトのリンク本来のジャンプ機能を無効化
      event.preventDefault();

      // hrefが"#"のみの場合はページトップに移動
      const href = this.getAttribute("href");
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // スクロール先のIDを取得
      const targetId = href.substring(1);

      // IDをもとにスクロール先の要素を取得
      const targetElement = document.getElementById(targetId);

      // スクロール先の要素が存在すれば、そこまでスムーズスクロール
      // クリックした要素のブラウザ上での位置 + 現在のスクロール量 - ヘッダーの高さ
      if (targetElement) {
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
};
