$(document).ready(function () {
	$("#btn-sum").click(function () {
		var a = parseInt($("#number-a").val());
		var b = parseInt($("#number-b").val());
		alert(a+b);
	});
});