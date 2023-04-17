$('.filters ul li').click(function() {
  // $('.filters ul li').removeClass('active');
  // $(this).addClass('active');
  $('.filters ul li').removeClass('after-click');
  $(this).addClass('after-click');
  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data,
  });
});

var $grid = $('.grid').isotope({
  itemSelector: '.all',
  percentPosition: true,
  masonry: {
    columnWidth: '.all',
  },
});