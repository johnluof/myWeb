$(function(){
	
	var sidebars = $('#sidebar'),
		btn = $('#list-switch'),
		shadow = $('.shadow'),
		backtop = $('.back-to-top');
	
	/***************侧边栏菜单*****************/
	function shows(){
		shadow.fadeIn();
		sidebars.css('right','0px');
	}
	
	function hides(){
		shadow.fadeOut();
		sidebars.css('right',-sidebars.width())
	}
	btn.on('click',shows);
	shadow.on('click',hides);
	
	
	/***************返回dingbu*****************/
	
	backtop.on('click',function(){
		$('body,html').animate({
			scrollTop:0
		},800);
	});
	
		
	$(window).on('scroll',function(){
		if($(window).scrollTop() > $(window).height()){
			backtop.fadeIn();
		}else{
			backtop.fadeOut();
		}
	})
	
	
	
	/******图片预加载
	 * 1.将xsrc的地址替换到src中去
        	//当图片进入到可视区域的时候，将图片的地址替换到src
        	
        	2.获取图片元素到最外层定点的距离
        	
        	3.获取页面可视区域的最低点的位置
	 * 
	 * ********/
	
	var img = $('.photo_list');
	//var srcs = img.attr('xsrc');
	//img.attr('src',srcs)
	//var top = $(window).scrollTop() $(window).height()
	img.css('opacity','0');
	$(window).on('scroll',function(){
		setTimeout(function(){
			for (var i = 0; i < img.length; i++) {
				//img.eq(i).attr('src',img.eq(i).attr('xsrc'));
				if ( $(window).height()+$(window).scrollTop()>= img.offset().top ) {
					img.eq(i).attr('src',img.eq(i).attr('xsrc')).animate({
						opacity　:　1,
					})
				}
			}
		},100)
	})
	$(window).trigger('scroll');
	
	
   
})
