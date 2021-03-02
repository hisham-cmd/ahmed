"use strict";

$(function (s) {
  s(".mobile-menu").on("click", function () {
    s(this).toggleClass("open"), slideout.on("close", function () {
      s("#mobile-menu").stop(0, 0).animate({
        opacity: "0"
      }, 300, function () {
        s(this).css({
          display: "none"
        });
      });
    }), slideout.on("beforeopen", function () {
      s("#mobile-menu").css({
        display: "block",
        opacity: "1"
      });
    }), slideout.toggle();
  }), s("#mobile-menu > ul > li > a").on("click", function () {
    var e = s(this).parents("li");

    if (e.hasClass("menu-item-has-children")) {
      var o = e.find("> ul").clone();
      return s(".focused .menu").html(o), s(".focused").addClass("show"), !1;
    }
  }), s(".focused .menu").on("click", "> ul > li > a", function () {
    var e = s(this).parents("li");

    if (e.hasClass("menu-item-has-children")) {
      var o = e.find("> ul").clone();
      return s(".focused2 .menu").html(o), s(".focused2").addClass("show"), !1;
    }
  }), s("#mobile-menu .back-button").on("click", function () {
    s(this).parents("div").removeClass("show").find(".content").html(" ");
  });
}); // start change theme

var change_color = document.getElementById("change_color"),
    change_theme = document.getElementById("change_theme"),
    color = '',
    colorCookie = getCookie('color');
change_color.addEventListener('input', function (e) {
  color = $(change_color).val();
  setCookie('color', color, 5);
  $("body").css('--main', color);
  $("body").css('--border', color);
  $("body").css('--color', color);
});
$("body").css('--main', colorCookie);
$("body").css('--border', colorCookie);
$("body").css('--color', colorCookie);

change_theme.onclick = function () {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    setCookie('theme', 'dark', 5);
  } else {
    setCookie('theme', ' ', 1);
  }
};

if (getCookie('theme') == 'dark') {
  document.body.classList.add('dark');
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}