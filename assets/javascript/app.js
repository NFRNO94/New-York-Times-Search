$(document).ready(function() {

var apiKeyParameter = "TEa4nRadTYRTNziA2AeBwQmRDxGm3VGa";
var searchParameter = "q=+ searchTerm + endYear + &begin_date= + begin+"
var mainURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var queryURL = mainURL + searchParameter + apiKeyParameter;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  }

});