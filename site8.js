$(document).ready(function () {
	var count = 0;
	$("#btn-1").click(function () {
		$("#content").prepend("<p>prepend #" + (count++) + "</p>");
	});
	$("#btn-2").click(function () {
		$("#content").append("<p>append #" + (count++) + "</p>");
	});
});