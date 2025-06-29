$(function () {
  const $menu = $("#gnav-list");
  const $menuToggle = $("#js-menu-toggle");

  // ☰ Menu ボタンクリックで開閉
  $menuToggle.on("click", function () {
    $menu.toggleClass("show");
  });

  // メニュー内リンククリックでメニューを閉じる（スマホのみ）
  $(".gnav-item a").on("click", function () {
    if (window.innerWidth < 768) {
      $menu.removeClass("show");
    }
  });


  // ページトップボタン
  $("#js-page-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
});
