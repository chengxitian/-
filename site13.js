$(document).ready(function () {
	$(".btn-delete").click(function () {
		var tr = $(this).parents('tr');
		tr.remove();
	});
	$(".btn-modify").click(function () {
		var tr = $(this).parents('tr');
		var number = tr.children('.number');
		number.text('12345');
		var name = tr.children('.name');
		name.tect('blablabla');
		var tel = tr('tel');
		tel.atte('href', 'tel:110');
		tel.text('110');
	});
});