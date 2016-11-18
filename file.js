
// song.track = function() {
// 	var url = `https://api.spotify.com/v1/search?q=${this.query}&type=track&limit=12`
// 	var req1 = $.get(url);
// 	req1.done(GotFlow);
// 	req1.fail(errorHandler);
// };

$(document).ready(function() {
	

	$(".form").submit(songMatcher);
	

	var searchSong = function(){
		this.title;
		this.artist;
		this.cover;
	}

	console.log(searchSong)


	searchSong.prototype.render=function (inputs){

		console.log(this);
		

		var self = this;

		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?q="+ inputs +"&type=track&limit=12",
			success: printResults(response),
			// console.log(response)

			error: function(error){
				console.log(error + "error")
			},
		});
	}


	function songMatcher(){
		console.log("visca songMatcher!")

		event.preventDefault();
		var inputs = $("input").val();
		console.log(inputs)
		var newtrack = new searchSong(inputs);
		console.log(newtrack)
		newtrack.render();
		clearSong ();

	}

	function printResults(response){
		console.log(response)
		// $(".print_tracks").text(response.tracks.items)
		
	}

	function clearSong () {
		$('form').empty();

	}

});