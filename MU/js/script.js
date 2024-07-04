$(function () {
  const $window = $(window);
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;
  const $dim = $('.dim');

  /* 헤더 부분 */

  $menu.on('mouseenter', function () {
    // 메뉴 한번에 떨어뜨리기
    const menuIdx = $(this).index();
    $menu.removeClass('on').eq(menuIdx).addClass('on');
    $submenu.stop().slideDown(duration);
    $dim.stop().fadeIn(duration);
    $header.addClass('active');
  });

  $menu.on('mouseleave', function () {
    // 메뉴 한번에 떨어뜨리기
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $dim.stop().fadeOut(duration);
    $header.removeClass('active');
  });

  /*   $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);
    $(this).addClass('on');

    $header.addClass('active');
  });

  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $(this).removeClass('on');

    $header.removeClass('active');
  }); */

  // const newsSlider = new Swiper('.news-slider', {
  //   // Optional parameters
  //   autoplay: {
  //     delay: 10000,
  //   },
  //   loop: true,
  //   speed: 3000,
  //   slidesPerView: 'auto',
  //   spaceBetween: 10,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  const newsCard = $('.news-card a');
  const newsCardtext = $('.news-top');
  console.log(newsCardtext);

  // closest() 메서드는 주어진 선택자와 일치하는 가장 가까운 조상 요소를 찾습니다.
  // 일반적으로 현재 요소부터 시작하여 조상 요소를 탐색하며, 처음으로 일치하는 요소를 반환합니다.

  /* News 부분 카드 호버효과 */
  $('.news-card a').on('mouseenter', function () {
    // 현재 마우스 진입한 .news-card a 요소에서 가장 가까운 .news-top 요소 찾기
    var newsCardtext = $(this).closest('.news-card').find('.news-top');
    newsCardtext.show();
  });

  $('.news-card a').on('mouseleave', function () {
    // 현재 마우스 이탈한 .news-card a 요소에서 가장 가까운 .news-top 요소 찾기
    var newsCardtext = $(this).closest('.news-card').find('.news-top');
    newsCardtext.hide();
  });

  const newsCards = document.querySelectorAll('.news-card');

  newsCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('a').style.transform = 'translateY(-5px)';
      card.querySelector('a').style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
      card.querySelector('a').style.transform = 'translateY(0)';
    });
  });

  // Match 슬라이더
  const bullet = $('.matches-pagenation-bullet li');
  console.log(bullet);

  const matchList = new Swiper('.match-list', {
    /*     autoplay: true, */
    slidesPerView: '3',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    pagination: {
      el: '.matches-pagenation-bullet',
      // type: 'progressbar',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
});
