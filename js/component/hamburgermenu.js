// /**
//  * ハンバーガーメニュー
//
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-menu");
  const button = document.querySelector(".js-button");
  const closeButton = document.querySelector(".js-close-button");
  const navLinks = document.querySelectorAll(".js-nav-link"); // メニュー内のリンクすべて

  // menuとbuttonがページ内にない場合returnする
  if (!menu || !button || !closeButton) return;

  // modal Openする関数
  const openMenu = () => {
    menu.showModal();
    gsap.to(menu, {
      autoAlpha: 1,
      ease: "power4.out",
      duration: 0.3,
    });
  };

  // modal Closeする関数
  const closeMenu = () => {
    gsap.to(menu, {
      autoAlpha: 0,
      ease: "power4.out",
      duration: 0.3,
      onComplete: () => menu.close(),
    });
  };

  // ボタンクリックでopen
  button.addEventListener("click", () => {
    openMenu();
  });

  // クローズボタンクリックでclose
  closeButton.addEventListener("click", () => {
    closeMenu();
  });

  // ナビリンククリックでclose
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Escapeキーを押すと非表示
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
    }
  });
};
