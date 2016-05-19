var globalObj = globalObj || {};
globalObj = $.extend(globalObj, {

	initEvent: function() {
		
		//博客分类下拉框
		var drop = $(".u-select-drop");
		var me_select = $("#J_select");
		me_select.click(function() { 
			drop.slideDown(); 
		})
		drop.click(function() { 
			$(this).slideUp(); 
		})
		$(".u-select-drop ul li").click(function() {
			$("#J_select input").val($(this).text());
		})
		
		//添加分类
		var mask = $(".m-pop-mask");
		var pop_addtype = $(".m-pop.m-addtype");
		$("#J_addType").click(function(){
			mask.show();
			pop_addtype.show();
		})
		$(".m-addtype .u-pop-close").click(function(){
			mask.hide();
			pop_addtype.hide();
		})
		
		//标签框点击使文本框得到焦点
		$(".m-label-input").click(function(){
			$(this).children("input").focus();
		})
		
		//标签
		var tag = $(".J_tag");
		tag.click(function(){
			tag_txt = $(this).text();
			var tag_string = "<div class='m-label-1'>" + tag_txt +"</div>";
			var tag_num = $(".m-label-1").length;
			if(tag_num < 5){
				$("#J_label_input").before(tag_string);
			}else{
				alert("标签数不能超过5个");
			}
			
		})
		$("#J_label_input").keyup	(function(e){
		    if(!e) var e = window.event; 
		    if(e.keyCode==32){
		        var input_txt = $(this).val();
		        var tag_string = "<div class='m-label-1'>" + input_txt +"</div>";
		    	var tag_num = $(".m-label-1").length;
				if(tag_num < 5){
					$("#J_label_input").before(tag_string);
					$(this).val("");
				}else{
					alert("标签数不能超过5个");
				}
		    }
		 });
	}
	});
	$(function(){
		globalObj.initEvent();
	});
	
