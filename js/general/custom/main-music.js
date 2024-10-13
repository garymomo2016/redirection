$(document).ready(function() {

	var fontTL = new TimelineMax({repeat: -1});
	var fTLTime = 12;

	fontTL.to($(".colorControl"), fTLTime, {
		css : {color : "#f596aa", borderColor: "#f596aa"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#ffb11b", borderColor: "#ffb11b"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#e83015", borderColor: "#e83015"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#227d51", borderColor: "#227d51"},
		ease:Back.easeOut
	})
	.to($(".colorControl"), fTLTime, {
		css : {color : "#986db2", borderColor: "#986db2"},
		ease:Back.easeOut
	});

	var passTarget = null;
	var passLock = false;

	$(".music-cover").on("click tap", function() {

		if (passLock) {
			return;
		}
		passLock = true;
		passTarget = $(this);
		var coverTL1 = new TimelineMax({ onComplete:nextCover });
		coverTL1.to(passTarget, 0.5, { scale: 0.2 })
		.to(passTarget, 0.3, { x: -200, autoAlpha: 0 });
	});

	function nextCover() {

		passTarget.hide();
		var coverTL2 = new TimelineMax({ onComplete:finishCover });
		var target = passTarget.parents(".music-items").find(".music-intro-1");
		target.show();
		coverTL2.from(target, 1, { x: -200, autoAlpha: 0 });
		target = passTarget.parents(".music-items").find(".music-intro-2");
		target.show();
		coverTL2.from(target, 1, { x: -200, autoAlpha: 0 }, "-=1");
		target = passTarget.parents(".music-items").find(".music-intro-3");
		target.show();
		coverTL2.from(target, 1, { x: 200, autoAlpha: 0 }, "-=1");
		$("html, body").animate({scrollTop: $("#" + passTarget.parents(".music-items").attr("id")).offset().top}, 500);
	}

	function finishCover() {
		passLock = false;
	}

	$(".music-extra-back a").on("click tap", function() {
		var urlParam = window.location.search.split("back=")[1] ? window.location.search.split("back=")[1] : "no";

		if (urlParam != "no") {
			var mainClass = urlParam.split("-")[0] ? urlParam.split("-")[0] : "no";
			var subClass = urlParam.split("-")[1] ? urlParam.split("-")[1] : "no";
			var itemClass = urlParam.split("-")[2] ? urlParam.split("-")[2] : "no";
			if (mainClass != "no" && subClass != "no" && itemClass != "no") {
				var targetClass = "";
				if (mainClass == "") {
					
				} else {
					targetClass = "music";
				}
				if (subClass == "2016") {
					location.replace("https://garymomo" + subClass + ".github.io/redirection/" + targetClass + "?item=" + itemClass);
				} else {
					location.replace("https://garymomo" + subClass + ".github.io/" + targetClass + "?item=" + itemClass);
				}
			} else {
				location.replace("https://garymomoindex.github.io/?visit=true");
			}
		} else {
			location.replace("https://garymomoindex.github.io/?visit=true");
		}
	});

	$(".btn-modal").on("click tap", function() {
		var htmlIframe1 = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/';
		var htmlIframe2 = '" allowfullscreen></iframe></div>';
		var htmlIframeSrc = '';
		var chkId = $(this).attr("id");
		if (chkId == 'adModala1-1' || chkId == 'adModala2-1') {
			htmlIframeSrc = 'txDS6spqqV0';
		} else if (chkId == 'adModala1-2' || chkId == 'adModala2-2') {
			htmlIframeSrc = 'Jh6B4cPK5YQ';
		} else if (chkId == 'adModala1-3' || chkId == 'adModala2-3') {
			htmlIframeSrc = 'NAS1O5ewxY8';
		} else if (chkId == 'adModala1-4' || chkId == 'adModala2-4') {
			htmlIframeSrc = 'k1tea6MV_JQ';
		} else if (chkId == 'adModala1-5') {
			htmlIframeSrc = 't5vTqUXkh94';
		} else if (chkId == 'adModala2-5') {
			htmlIframeSrc = 'uXxM9jnfz2g';
		} else if (chkId == 'adModala1-6' || chkId == 'adModala2-6') {
			htmlIframeSrc = '9ntDYBnk8iw';
		} else if (chkId == 'adModala1-7' || chkId == 'adModala2-7') {
			htmlIframeSrc = 'HywVTFd2vEQ';
		} else if (chkId == 'adModala1-8' || chkId == 'adModala2-8') {
			htmlIframeSrc = 'XN4IPxw1q1Q';
		} else if (chkId == 'adModala1-9' || chkId == 'adModala2-9') {
			htmlIframeSrc = '7WalLNkxaJ4';
		} else if (chkId == 'adModala1-10' || chkId == 'adModala2-10') {
			htmlIframeSrc = 'cc7CwN_mcqU';
		} else if (chkId == 'adModala1-11' || chkId == 'adModala2-11') {
			htmlIframeSrc = 'lIRZFNauhDQ';
		} else if (chkId == 'adModala1-12' || chkId == 'adModala2-12') {
			htmlIframeSrc = 'WAyvJ2MeLb0';
		} else if (chkId == 'adModala1-13' || chkId == 'adModala2-13') {
			htmlIframeSrc = 'pnXv3I0xlnU';
		} else if (chkId == 'adModala1-14' || chkId == 'adModala2-14') {
			htmlIframeSrc = 'jC9CeFz2eqQ';
		} else if (chkId == 'adModala1-15' || chkId == 'adModala2-15') {
			htmlIframeSrc = '_Ymr3MfHnI8';
		} else if (chkId == 'adModala1-16' || chkId == 'adModala2-16') {
			htmlIframeSrc = 'pzVCI6XaQe8';
		} else if (chkId == 'adModala1-17' || chkId == 'adModala2-17') {
			htmlIframeSrc = 'sKPFdFX66ZQ';
		} else if (chkId == 'adModala1-18' || chkId == 'adModala2-18') {
			htmlIframeSrc = 'UXxI0jnE8Rs';
		} else if (chkId == 'adModala1-19' || chkId == 'adModala2-19') {
			htmlIframeSrc = 'l0wabp229tk';
		} else if (chkId == 'adModala1-20' || chkId == 'adModala2-20') {
			htmlIframeSrc = 'P2WuX_CmOYM';
		} else if (chkId == 'adModala1-21' || chkId == 'adModala2-21') {
			htmlIframeSrc = 'BubN-U6YiqU';
		} else if (chkId == 'adModala1-22' || chkId == 'adModala2-22') {
			htmlIframeSrc = 'yNd0SGUMlQ4';
		} else if (chkId == 'adModala1-23' || chkId == 'adModala2-23') {
			htmlIframeSrc = '_FGivCv80xE';
		} else if (chkId == 'adModala1-24' || chkId == 'adModala2-24') {
			htmlIframeSrc = '_sEsTe2CROE';
		} else if (chkId == 'adModala1-25' || chkId == 'adModala2-25') {
			htmlIframeSrc = '4D0NqCMa5Kw';
		} else if (chkId == 'adModala1-26' || chkId == 'adModala2-26') {
			htmlIframeSrc = 'JrKGUQUPb-c';
		} else if (chkId == 'adModala1-27' || chkId == 'adModala2-27') {
			htmlIframeSrc = '7hnr7HRmcGc';
		} else if (chkId == 'adModala1-28' || chkId == 'adModala2-28') {
			htmlIframeSrc = 'WiWUboS72tY';
		} else if (chkId == 'adModala1-29' || chkId == 'adModala2-29') {
			htmlIframeSrc = '-9vjrgeSEZQ';
		} else if (chkId == 'adModala1-30' || chkId == 'adModala2-30') {
			htmlIframeSrc = '7NNTt3rB2uA';
		} else if (chkId == 'adModala1-31' || chkId == 'adModala2-31') {
			htmlIframeSrc = 'yNqbK2usPZk';
		} else if (chkId == 'adModala1-32') {
			htmlIframeSrc = 't5vTqUXkh94';
		} else if (chkId == 'adModala2-32') {
			htmlIframeSrc = 'uXxM9jnfz2g';
		} else if (chkId == 'adModala4') {
			htmlIframeSrc = 'Te9qxDdeaY4';
		} else if (chkId == 'adModalb3') {
			htmlIframeSrc = 'oOa2TqOP7lk';
		} else if (chkId == 'adModalc1') {
			htmlIframeSrc = '3KpgHOFcWeU';
		}
		$("#adModal").find("#video-block").append(htmlIframe1 + htmlIframeSrc + htmlIframe2);
	});

	$("#adModal").on("hide.bs.modal", function() {
		$(this).find("#video-block").empty();
	});
});

$(window).on("load", function() {

	$(".loader").hide();

	var extraTL = new TimelineMax();

	extraTL.from($(".music-extra-title"), 1, { y: -200, autoAlpha: 0 })
	.from($(".music-extra-audit"), 1, { x: 400, autoAlpha: 0 }, "-=1")
	.from($(".music-video"), 1, { scale: 0.1, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-detail"), 1, { x: -200, autoAlpha: 0 }, "-=1")
	.from($(".music-extra-line-ext"), 0.3, { autoAlpha: 0 })
	.from($(".music-extra-line"), 1, { autoAlpha: 0 });
});