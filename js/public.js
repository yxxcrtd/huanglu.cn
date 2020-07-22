$(function() {

    // 浏览器可视区域的高度 - 顶部导航的高度
	$("#slider").height($(window).height() - 60);

	$("#culture").load("culture.html");

	$("#footer").load("footer.html");

	$("#articleList").load("articleList.html");
	$("#category").load("category.html");

});

