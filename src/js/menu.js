(() => {
  let menu = $('.vacancy-menu');

  menu.hide();

  $('.vacancy-title').on('click', () => {
    menu.slideToggle(600);
  })
})();
