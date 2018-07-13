﻿$(document).ready(function() {
	var optionNum = $("#datatimeNum");

	$(".glyphicon-triangle-left").on("click", function() {
		var num = parseInt(optionNum.text());
		num--;
		if (num < 1) {
			num = 12;
		}
		optionNum.text(num);
	});

	$(".glyphicon-triangle-right").on("click", function() {
		var num = parseInt(optionNum.text());
		num++;
		if (num > 12) {
			num = 1;
		}
		optionNum.text(num);
	});

	$(".glyphicon-search").on("click", function() {
		$("html, body").animate({scrollTop: $("#month" + optionNum.text()).offset().top}, 2000);
	});
});