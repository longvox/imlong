var $html = $("html"),
	$body = $("body");
$(document).on("click", ".navbar-toggle", function () {
	var a = $(this);
	if(a.hasClass('toggled')){
		setTimeout(function () {
			a.removeClass("toggled")
		}, 580);
		$html.removeClass("nav-open");
	}
	else{
		setTimeout(function () {
			a.addClass("toggled")
		}, 580);
		$html.addClass("nav-open");
	}
	
	
})
$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
});