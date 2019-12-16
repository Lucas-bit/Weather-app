/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for Openweather API based on form inputs
 */
    
var cities = [""];
 
 $("#run-search").on("click", function(){
     event.preventDefault()
    var city = $("#search-value").val();
    // queryURL is the url we'll use to query the API//
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=bc01722bf0252f19e97faf6059dd8e91";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
        console.log(data)   
    })

})

// function renderCityButtons(){
//     $("#search-value").empty()
    
//     for (var i = 0; i < cities.length; i++){

//         var a =("<button>");

//         a.addClass=("city");

//         a.attr("city-name", cities[i]);

//         a.text(cities[i]);

//         $("searched-cities").append(a)
//     }
// }



// // ,
   
  

// //   // Function to empty out the forecast
// //   function clear() {
// //     $("#forecast-section").empty();
// //   }
  
// //   // CLICK HANDLERS
// //   // ==========================================================
  
  // .on("click") function associated with the Search Button
  $("#run-search").on("click", function(event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks). Prevents the page from reloading on form submit.
    event.preventDefault();
  })
  
// //     // Empty the region associated with the forecast
// //     clear();
  
// //     // Build the query URL for the ajax request to the OpenWeather API
    
  
// //     // Make the AJAX request to the API - GETs the JSON data at the queryURL.
// //     // The data then gets passed as an argument to the updatePage function
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(updatePage);
//   ;
  
// //   //  .on("click") function associated with the clear button
// //   $("#clear-all").on("click", clear);
