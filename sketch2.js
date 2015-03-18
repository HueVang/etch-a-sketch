$(document).ready(function() {

	function grid() {
		alert('Making grid...');
		for (var i = 0; i < 256; i++) {
			if(i % 17 == 0) {
				$("#container").append("<div class='square2'></div>");
			}
			else {
				$("#container").append("<div class='square'></div>");
			};	
		};
	};

	function hover() {
		$(".square").hover (
		function() {
			$(this).addClass("my_hover");
		});
	}

	grid();
	hover();

	$("#reset").click(function() {
		$("#container").children().remove('div');
		grid();
		hover();
	});

	$("#disco").click(function() {
		setInterval(function() {
				var red = Math.floor(Math.random() * 255);
				var green = Math.floor(Math.random() * 255);
				var blue = Math.floor(Math.random() * 255);
			$(".square").each().animate( { "background-color": "rgb("+red+","+green+","+blue+")"}, 1000); 							
			});
	});
});
