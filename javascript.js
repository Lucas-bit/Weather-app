/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for Openweather API based on form inputs
 */




var cities = [];
 function searchWeather(city){
    event.preventDefault()
    

    // queryURL is the url we'll use to query the API//
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=bc01722bf0252f19e97faf6059dd8e91";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
      console.log(data)
     
       // var cityData = data.city
    //for (var i = 0; i <data.list.length; i++){
        var main = data.main
        var wind = data.wind
    //}
        // var weatherInfoDiv = $("<div class = 'weather'>");
           var name = $("#display-name").html (data.name)
           var temperature = $("#display-temp").html (main.temp);
           var humid = $("#display-humidity").html (main.humidity);
           var wind = $("#display-windspeed").html (wind.speed);
           var lat = $("#display-coord-lat").html (data.coord.lat);
           var lon = $("#display-coord-lon").html (data.coord.lon);
    
           $("#display-name").append (name);
           $("#display-temp").prepend ("Current Temp: ").append (temperature).append("° F");
           $("#display-humidity").prepend ("Humidity: ").append(humid).append("%");
           $("#display-windspeed").prepend("Wind Speed: ").append(wind).append("mph");
           $("#display-coord-lat").prepend("Lattitude: ").append(lat).append("°");
           $("#display-coord-lon").prepend("Longitude: ").append(lon).append("°");


           console.log(temperature)

    // var iconURL = "https://openweathermap.org/img/wn/"+icon+".png"
    // var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&APPID=7874013951269e39ea832bee33a22dbe" 
    // var today = new Date().toLocaleDateString()

    renderCityButtons()

    });
    
 }
 $("#run-search").on("click", function(){
    var city = $("#search-value").val();
    cities.push(city)
    // put if statement to check to see if city is already in cities, if so dont add it
    console.log(cities)
     searchWeather(city)
 });
    

function renderCityButtons(){
    $("#search-value").empty()
    $("#searched-cities").empty()
    
    for (var i = 0; i < cities.length; i++){

        var a = $("<button>");
        a.attr("id","searched-cities-" +i);
        a.addClass=("city");

        // a.attr("#searched-cities", cities[i]);

        a.text(cities[i]);
        var p = $("<p>");
        p.append(a)

        $("#searched-cities").append(p)
        $("#searched-cities-" + i).on("click", function(){
            var city = $(this).text();
            searchWeather(city)
        });
    }
}


// // ,
   
  

// //   // Function to empty out the forecast
// //   function clear() {
// //     $("#forecast-section").empty();
// //   }
  
// //   // CLICK HANDLERS
// //   // ==========================================================
  
  // .on("click") function associated with the Search Button
  $("#run-search").on("click", function(event) {
      if (event.keyCode === 13) {
          $("#run-search").onclick()
      }
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
