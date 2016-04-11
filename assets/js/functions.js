$( document ).ready(function() {

  $(function(){

    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

    $('.nav-link').each(function() {
    if ($(this).attr('href') == pathname)
    {
        $(this).addClass('current');
    }
    });
  });

  $('.nav-toggle').on('click', function(e) {
    $('nav').toggleClass('nav-is-closed');
    $('.fa').toggleClass('fa-angle-down fa-angle-up');
    $('div.cartodb-legend-stack').toggleClass('nav-is-closed');
    e.preventDefault();
  });

});
