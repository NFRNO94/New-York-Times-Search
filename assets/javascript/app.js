$(document).ready(function () {

  // $(document).ready(function() {

  // var apiKeyParameter = "TEa4nRadTYRTNziA2AeBwQmRDxGm3VGa";
  // var searchParameter = "q=+ searchTerm + endYear + &begin_date= + begin+"
  // var mainURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  // var queryURL = mainURL + searchParameter + apiKeyParameter;

  // seaechParams = $("#search-term");
  // .val()
  // .trim();

  // var startYear = $("#start-year")
  // .val()
  // .trim();

  //if (parseInt(startYear)) {
  //  queryParams.begin_date = startYear;
  //}

  //   var endYear = $("#end-year")
  //   .val()
  //   .trim();

  // if (parseInt(endYear)) {
  //   queryParams.end_date = endYear + "0101";
  // }

  // console.log("---------------\nURL: " + queryURL + "\n---------------");
  // console.log(queryURL + $.param(queryParams));
  // return queryURL + $.param(queryParams);



  // $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //       console.log(response);
  //   }

  // });

  $(document).on("click", "#run-search", function (e) {
  // $("#run-search").on("click", function (e) {

    e.preventDefault();
    console.log("HELLO");
    var beginYear = "";
    var endYear = "";
    var numArt = $("#records-retrieve").val;
    var searchTerm = $("#searh-term").val;
    if ($("#start-year").val() != null) {
      beginYear.concat("&begin_date=" + $("#start-year").val() + "0101")
    }

    if ($("#end-year").val() != null) {
      endYear.concat("&end_date=" + $("#end-year").val() + "1231")
    }

    var articlesURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + "q=" + searchTerm + beginYear + endYear + "&api-key=TEa4nRadTYRTNziA2AeBwQmRDxGm3VGa";
    console.log(articlesURL);

    $.ajax({
      url: articlesURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(response);
        
      });

  });

});