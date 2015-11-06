$(document).ready(function() {
	$("#btn").click(function() {
		if ($("pwd").val() == $("#confirm").val()) {
			alert("恭喜，密码合法！");
		} else {
			$('#info').text("两次密码输入不一致!");
		}
	});
});