// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require moment
//= require jquery3
//= require popper
//= require bootstrap

// Sticky footer js
// Thanks to Charles Smith for this -- http://foundation.zurb.com/forum/posts/629-sticky-footer
// $(window).bind("load", function () {
//   var footer = $("#footer");
//   var pos = footer.position();
//   var height = $(window).height();
//   height = height - pos.top;
//   height = height - footer.height();
//   if (height > 0) {
//     footer.css({
//       "margin-top": height + "px",
//     });
//   }
// });

// $("#myModal").on("shown.bs.modal", function () {
//   $("#myInput").trigger("focus");
// });

// Flash fade
// $(function() {
//   $('.alert-box').fadeIn('normal', function() {
//      $(this).delay(3700).fadeOut();
//   });
// });

$('.dropdown-toggle').dropdown()

$(document).ready(function() {
    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
});

$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});
