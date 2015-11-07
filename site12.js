$(document).ready(function () {
   $(".dropdown").click(function () {
       var id = $(this).attr("data-toggle");
	   var offset = $(this).offset();
	   $("#" + id).show();
	   $("#" + id).css('left', offset.left);
	});
});

$(document).on('click',function(e) { 
     if ($(e.target).attr('data-toggle')) return;
	 if ($(e.target).hasClass('nav-drop')) return;
	 if ($(e.target).parents('.nav-drop').length>0) return;
	 $('.nav-drop').hide();
});	 	   