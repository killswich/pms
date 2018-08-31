$(document).ready(function() {

	$("#gall_grid").mixItUp();

	$(".s_gall li").click(function() {
		$(".s_gall li").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");

	$(".top_text h1, .desc p").animated("fadeInUp", "fadeOutDown");

	$(".top_text p, .section_header, .desc h1").animated("fadeIn", "fadeOut");

	$(".animation_left").animated("fadeInLeft", "fadeOutLeft");

	$(".animation_right").animated("fadeInRight", "fadeOutRight");

	$(".left .anim_too_item").animated("fadeInLeft", "fadeOutLeft");

	$(".right .anim_too_item").animated("fadeInRight", "fadeOutRight");

	$(".center .anim_too_item").animated("fadeIn", "fadeOut");

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_mnu").fadeOut(600);
		}
		else {
			$(".top_mnu").fadeIn(600);
		};
	});

	$(".gall_item").each(function(i) {
		$(this).find("a").attr("href","#work_" + i);
		$(this).find(".podrt_descr").attr("id","work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();
});

var delay = 1000; // Задержка прокрутки
$(document).ready(function() {
	$('.top_button').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
		/* Плавная прокрутка наверх */
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});
});



$(window).load(function() { 

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	
});