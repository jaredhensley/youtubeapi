$(document).ready(function() {
	$("form").on("submit", function(event) {
		event.preventDefault();
		var searchEntry = $("#query").val();
		getRequest(searchEntry);
	});

	function getRequest(searchEntry) {
		var params= {
			part: 'snippet',
			key: "AIzaSyDWa0xZPMXm-Qdy4c2LAlFhdZIB-P9RQbY",
			q: searchEntry

		};
		url = "https://www.googleapis.com/youtube/v3/search" ;

		$.getJSON(url, params, function (results) {
			myData = (results.items);
			showResults(myData);
		});
	}

	function showResults(myData) {
		var html = '';
		console.log(myData);
		$.each(myData, function (index,value) {
			var youtubeSearch = "https://www.youtube.com/watch?v=";
			var imgURL = value.snippet.thumbnails.medium.url;
			var image = document.createElement("img");
			image.src = imgURL;
			$(".search-results").append(image).find(image).wrap("<a href="+youtubeSearch+value.id.videoId+"></a>");
			/*html += "<img href="www.google.com"src=" + imgURL  + "><br>";*/
		});

		/*$(".search-results").append(html);*/
	}


});