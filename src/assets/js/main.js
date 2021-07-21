
$('.header__btns').on('click', '.btn', function() {
    $(this).addClass('active').siblings().removeClass('active');
  });
