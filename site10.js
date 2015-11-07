$(document).ready(function () {
	var count = 0;
	$("#btn").click(function () {
		var txt = $("#txtbox").val();
		if (txt.length < 4 || txt.length>16)
		     $('#txtbox').addClass('warning');
		else
		{
			$('#txtbox').removeClass('warning');
			alert('恭喜你，字符串合法！');
		}	 
	})
})