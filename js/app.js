$(document).ready(function(){
	function.slide(){
		$(".slider#1").show("fade", 900);
		$(".slider#1").delay(1000).hide("slide", {direction:"left"}, 900);
		var sc = $(".slider img").size();
		var count = 2;

		setinterval(function(){
			$(".slider#"+count).show("slide", {direction:"right"}, 900);
			$(".slider#"+count).delay(1000).hide("slide", {direction:"left"}, 900);

			if(count == sc){
				count = 1;
			}else{
				count = count+1;
			}
		}, 2800)
	}
});
