/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for Openweather API based on form inputs
 */




var cities = [""];
 
 $("#run-search").on("click", function(){
     event.preventDefault()
    var city = $("#search-value").val();
    // queryURL is the url we'll use to query the API//
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&APPID=bc01722bf0252f19e97faf6059dd8e91";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
      console.log(data)
      console.log(data.city.name)
      console.log(data.city.population)
        
    
        // var weatherInfoDiv = $("<div class = 'weather'>");
           var name = $("#display-name").html (data.city.name)
           var temperature = $("#display-temp").html (data.main.temp_min);
           var humid = $("#display-humidity").html (data.main.humidity);
           var wind = $("display-windspeed").html (data.wind.speed);
           var lat = $("display-coord-lat").html (data.coord.lat);
           var lon = $("display-coord-lon").html (data.coord.lon);
    
           $("#display-name").html (name)
           $("#display-temp").append(temperature);
           $("#display-humidity").append(humid);
           $("#display-windspeed").append(wind);
           $("#display-coord-lat").append(lat);
           $("#display-lon").append(lon);

    });
    
 });
    

// function renderCityButtons(){
//     $("#search-value").empty()
    
//     for (var i = 0; i < cities.length; i++){

//         var a =("<button>");

//         a.addClass=("city");

//         a.attr("#searched-cities", cities[i]);

//         a.text(cities[i]);

//         $("#searched-cities").append(a)
//     }
// }
// renderCityButtons()


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
