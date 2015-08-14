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
		$.each(myData, function (index,value) {
			var imgURL = value.snippet.thumbnails.medium.url;
			var image = document.createElement("img");
			image.src = imgURL;
			$(".search-results").append(image);
			$(".search-results").children("img").wrap("<a href='http://www.google.com'></a>");
		});

		/*$(".search-results").append(html);*/
	}


});