/*****************************

 Created by Alexandr M.
 Date: 30.08.13

 *****************************/

$(function(){
    $('.js-nav_dropdown').each(function(){
        var $this = $(this);
        $this.find('.js-nav_dropdown_link').click(function(){
            $this.find('.dropdown_list_wrap').fadeIn('fast');
        });
        $(document).mouseup(function(event){
            var container = $this.find('.dropdown_list_wrap');
            if (container.has(event.target).length == 0){
                $(container).fadeOut('fast');
            }
        });
        $('.js-nav_dropdown_link-close').click(function(event){
            $('.dropdown_list_wrap').fadeOut('fast');
        });
    });
});

$(document).ready(function() {
    $('#coin-slider').coinslider();

    $('.js-tab-menu .how-much_menu_item').click(function(){
        $('.js-tab-menu .how-much_menu_item').removeClass('active');
        $(this).addClass('active');
        if ($(this).is('.js-menuItem-1')) {
            $('.js-tab-content-2').hide();
            $('.js-tab-content-1').show();
        } else {
            $('.js-tab-content-1').hide();
            $('.js-tab-content-2').show();
        }
    });

    $('.js-faq-item').each(function(){
       $(this).click(function(){
           $(this).toggleClass('active');
       });
    });
	
	var cts_dlp = $(".taxation-system-control .dropdown_list_wrap");
	$(".currrent-taxation-system, .taxation-system-btn").click(function(e) {
		if(cts_dlp.hasClass("open")){
			cts_dlp.fadeOut('fast');
			cts_dlp.removeClass("open");
		}
        else{
			cts_dlp.fadeIn('fast');
			cts_dlp.addClass("open");
		}
    });
	
	$(".taxation-system-control .dropdown_list_item a").click(function(e) {
        $("#currrent-taxation-system").val($(this).attr("href"));
		$(".currrent-taxation-system").text($(this).text());
		$(".taxation-system-control .dropdown_list_item").removeClass("active");
		$(this).parent().addClass("active");
		cts_dlp.fadeOut('fast');
		cts_dlp.removeClass("open");
		
		var cts = $("#currrent-taxation-system").attr("value");
		var cts = eval(cts);
		var value = $("#SliderSingle").attr("value");
		for(i = 0; i < cts.length; i++){
			if((value  >= parseInt(cts[i][0])) && (value  <= parseInt(cts[i][1]))){
				$("#price").text(cts[i][4]);
				$("#visit").text(cts[i][2]);
				$("#employees").text(cts[i][3]);
			}
		}
		
		return false;
    });
	
	$(".taxation-system-control .dropdown_list_item").click(function(e) {
        $("#currrent-taxation-system").val($(this).children("a").attr("href"));
		$(".currrent-taxation-system").text($(this).children("a").text());
		$(".taxation-system-control .dropdown_list_item").removeClass("active");
		$(this).addClass("active");
		cts_dlp.fadeOut('fast');
		cts_dlp.removeClass("open");
		
		var cts = $("#currrent-taxation-system").attr("value");
		var cts = eval(cts);
		var value = $("#SliderSingle").attr("value");
		for(i = 0; i < cts.length; i++){
			if((value  >= parseInt(cts[i][0])) && (value  <= parseInt(cts[i][1]))){
				$("#price").text(cts[i][4]);
				$("#visit").text(cts[i][2]);
				$("#employees").text(cts[i][3]);
			}
		}
		
		return false;
    });
	
	$(".taxation-system-btn").hover(
	function(e) {
        $(".currrent-taxation-system").css("color", "#ef0808");
    },
	function(e) {
        $(".currrent-taxation-system").css("color", "#252525");
    });
	
});
