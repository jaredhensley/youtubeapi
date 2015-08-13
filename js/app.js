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
		console.log(myData);
		var html = '';
		$.each(myData, function (index,value) {
			/*console.log(myData.items[0]);*/
			html += "<img src=" + value.snippet.thumbnails.medium.url +"><br>";

		});

		$(".search-results").append(html);
	}


});