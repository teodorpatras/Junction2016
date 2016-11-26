var TIME = 5;
var timer;


$(function() {

	document.addEventListener("click", restartTimer, false);

	var timer = new Timer(1000, function(self, seconds) {
		if (seconds == TIME) {
			swapBack();
			self.stop();
		}
	});

	function restartTimer() {
		console.log("(re)starting timer");
		timer.restart();
	}

	function swapBack() {

		$( "#interactive" )
	  		.animate({
			    opacity: 1,
			    width: "100px",
			    height: "100px",
			    'z-index': "100"
			}, 2000, function() {}
		);

	  	$( "#ads" )
	  		.animate({
			    opacity: 1,
			    width: "100%",
			    height: "100%",
			    'z-index': "0"
			}, 2000, function() {}
		);
	}

	$( "#click-div" ).click(function(event) {

		console.log("clicked");

	  	$( "#ads" )
	  		.animate({
			    opacity: 1,
			    width: "100px",
			    height: "100px",
			    'z-index': "100"
			}, 2000, function() {}
		);

	  	$( "#interactive" )
	  		.animate({
			    opacity: 1,
			    width: "100%",
			    height: "100%",
			    'z-index': "0"
			}, 2000, function() {}
		);

	});
});