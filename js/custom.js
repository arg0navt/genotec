$(document).ready(function(){
	var st;
	function it_h() {
		clearTimeout(st);
		var st = setTimeout(function(){
			$('.secondScreen .item .descr').removeAttr('style');
			$('.secondScreen .item .ttl').removeAttr('style');
			
			//setTimeout(function(){
				var h = 0, th = 0;
				$('.secondScreen .item .descr').each(function(){
					var nh = $(this).outerHeight(),
						t_h = $(this).parents('.item:eq(0)').find('.ttl').outerHeight();
					
					if(h < nh)
						h = nh;
					
					if(th < t_h)
						th = t_h;
				});
				
				if(th > 0)
					$('.secondScreen .item .ttl').css({'min-height': th});
				
				if(h > 0)
					$('.secondScreen .item .descr').css({'min-height': h});
			//}, 100);
		}, 500);
	}
	
	it_h();
	
	$('.buy_btn').hover(function(){
		if($(this).hasClass('white'))
			$(this).removeClass('white');
		else
			$(this).addClass('white');
	}, function(){
		if($(this).hasClass('white'))
			$(this).removeClass('white');
		else
			$(this).addClass('white');
	});
	
	$('.up_btn').click(function(){
		$('body,html').animate({scrollTop:0});
	});

	$('.the_menu .the_hamb').click(function(){
		if($(window).width() <= 1150)
			$(this).parents('.the_menu:eq(0)').toggleClass('active');
	});

	function check_menu() {
		$('.the_menu').removeClass('active');
	}

	check_menu();
	
	function up_btn() {
		var btn = $('.up_btn'),
			wh = $(window).height(),
			wp = $(window).scrollTop();
		
		
		if(wp > wh) {
			btn.fadeIn(300);
		} else {
			btn.fadeOut(300);
		}
	}
	
	$('.call_buy_popup').click(function(){
		$('.popup_form').fadeIn(300);
		$('#darkbg').fadeIn(300);
		$('body').addClass('hidden');
		
		var mt = -($('.popup_form').outerHeight()/2);
		
		$('.popup_form').css('margin-top', mt);
	});
	
	
	$('.the_menu ul li a').click(function(e){
		var bl = ($($(this).attr('href')).offset().top - $('#head').outerHeight());
		//alert(bl);
		$('body,html').animate({scrollTop:bl});
		
		e.preventDefault();
	});
	$('.ss').click(function(e){
		var bl = ($($(this).attr('href')).offset().top - $('#head').outerHeight());
		//alert(bl);
		$('body,html').animate({scrollTop:bl});
		
		e.preventDefault();
	});
	up_btn();

	
	$(window).resize(function(){
		it_h();
		check_menu();
	});
	
	$(window).scroll(function(){
		up_btn();
		check_menu();
	});
	
	var change_ori;
	
	$( window ).on( "orientationchange", function( event ) {
	  //$( "body" ).text( "This device is in " + event.orientation + " mode!" );
		
		//alert('change ori');
		setTimeout(function(){
			$('body,html').animate({scrollTop:0}, 200);
		},500);
		setTimeout(function(){
			$('body,html').animate({scrollTop:0}, 200);
		},1000);
	});
    $('#pic_btn').click(function(){
        
        return false;
    });    
    $('#buy_btn').click(function(){
        if ($('#cl_name').val() == '') {
            $('#cl_name').focus();
            return false;
        }
        if ($('#cl_surname').val() == '') {
            $('#cl_surname').focus();
            return false;
        }
        if ($('#cl_email').val() == '') {
            $('#cl_email').focus();
            return false;
        }
        if ($('#cl_phone').val() == '') {
            $('#cl_phone').focus();
            return false;
        }
        if ($('#cl_city').val() == '') {
            $('#cl_city').focus();
            return false;
        }
        if ($('#cl_doctor').val() == '') {
            $('#cl_doctor').focus();
            return false;
        }
        if ($('#cl_title').val() == '') {
            $('#cl_title').focus();
            return false;
        }
        if ($('#cl_text').val() == '') {
            $('#cl_text').focus();
            return false;
        }
        return true;
    });
});

$(window).resize(function(){
if($(window).width() <= 1000){
$('body').addClass('narrow');
}
});

$(document).ready(function(){
$('.sh1').click(function(e){
//$('.block_f').fadeIn('slow');
$('#popup_form1').show();
$('.sh_back').show();
});
});
$(document).ready(function(){
$('.sh2').click(function(e){
//$('.block_f').fadeIn('slow');
$('#popup_form2').show();
$('.sh_back').show();
});
});
$(document).ready(function(){
$('.sh3').click(function(e){
//$('.block_f').fadeIn('slow');
$('#popup_form3').show();
$('.sh_back').show();
});
});
$(document).ready(function(){
$('.sh_back').click(function(e){
//$('.block_f').fadeIn('slow');
$('#popup_form1').hide();
$('#popup_form2').hide();
$('#popup_form3').hide();
$('.sh_back').hide();
});
});
$(document).ready(function(){
$('.close_popup').click(function(e){
//$('.block_f').fadeIn('slow');
$('#popup_form1').hide();
$('#popup_form2').hide();
$('#popup_form3').hide();
$('.sh_back').hide();
});
});