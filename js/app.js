$(document).ready(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    var searchEntry = $("#query").val();
    getRequest(searchEntry);
    $("#query").val("");
  });

  function getRequest(searchEntry) {
    var params = {
      part: 'snippet',
      key: "AIzaSyDWa0xZPMXm-Qdy4c2LAlFhdZIB-P9RQbY",
      q: searchEntry,
      maxResults: 6
    };

    url = "https://www.googleapis.com/youtube/v3/search";

    $.getJSON(url, params, function(results) {
      myData = (results.items);
      showResults(myData);
    });
  }

  function showResults(myData) {
    $(".search-results").empty();
    $.each(myData, function(index, value) {
      var youtubeSearch = "https://www.youtube.com/watch?v=";
      var imgURL = value.snippet.thumbnails.medium.url;
      var image = document.createElement("img");
      image.src = imgURL;
      $(".search-results").append(image).find(image).wrap("<a href=" + youtubeSearch + value.id.videoId + "></a>");
      /*$(".search-results").append("<br>");*/
      /*html += "<img href="www.google.com"src=" + imgURL  + "><br>";*/
    });

    /*$(".search-results").append(html);*/
  }

});