// My Scripts
$(document).foundation();

//Click Link Hide Article
$('a').click(function(){ 

		$('article').readmore({
			speed: 1000,
			maxHeight: 0,
			startOpen: false

		});

});


