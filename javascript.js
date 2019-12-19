/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for Openweather API based on form inputs
 */



var today = new Date().toLocaleDateString()
var cities = [];
 function searchWeather(city){
    event.preventDefault()
    renderCityButtons()

    

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
        //
           
          
           var temperature = $("#display-temp").html (main.temp);
           var humid = $("#display-humidity").html (main.humidity);
           var wind = $("#display-windspeed").html (wind.speed);
           var lat = $("#display-coord-lat").html (data.coord.lat);
           var lon = $("#display-coord-lon").html (data.coord.lon);
           var icon1 = data.weather[0].icon
           var iconURL = "https://openweathermap.org/img/wn/"+icon1+".png"
           var name = $("#display-name").html (data.name)
           var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat="+data.coord.lat+"&lon="+data.coord.lon+"&APPID=bc01722bf0252f19e97faf6059dd8e91" 
           

           $("#display-icon").attr("src", iconURL);
           $("#display-date").text(today);
           $("#display-temp").prepend ("Current Temp: ").append (temperature).append("° F");
           $("#display-humidity").prepend ("Humidity: ").append(humid).append("%");
           $("#display-windspeed").prepend("Wind Speed: ").append(wind).append("mph");
           $("#display-coord-lat").prepend("Lattitude: ").append(lat).append("°");
           $("#display-coord-lon").prepend("Longitude: ").append(lon).append("°");

           //   URL AJAX

           $.ajax({
            url: uvURL,
            method: "GET"
        }).then(function(UVresponse){
         var uvIndex = UVresponse.value
         console.log(uvIndex)

         $("#display-UV").text(uvIndex).prepend("UV Index: ");
        
        //  FiveDay Forecast Ajax
         
         var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&APPID=bc01722bf0252f19e97faf6059dd8e91"
         
         $.ajax({
            url: fiveDayURL,
            method: "GET"
        }).then(function(fiveDayResponse){
            var fiveDayIndex = fiveDayResponse
            console.log(fiveDayIndex)

            n = 0
            for (var i = 0; i < fiveDayIndex.list.length; i++){
                
                var icon2 = fiveDayIndex.list[n].weather[0].icon
                var fiveIconURL = "https://openweathermap.org/img/wn/"+icon2+".png"
                var date = $(".display-fiveday-date").html (new Date(fiveDayIndex.list[0].dt_txt).toLocaleDateString())
                var fiveTemp = $(".display-fiveday-temp").html (fiveDayIndex.list[0].main.temp)
                var fiveHumidity = $(".display-fiveday-humidity").html (fiveDayIndex.list[0].main.humidity)


                // var fiveDayInfoDiv = $("<div class = 'five-day-weather'>").text (date);

                $(".display-fiveday-date").append(date);
                $(".display-fiveday-icon2").attr("src", fiveIconURL);
                $(".display-fiveday-temp").prepend("Avg Temp: ").append(fiveTemp).append("° F");
                $(".display-fiveday-humidity").prepend("Humidity: ").append(fiveHumidity).append("%");

               

                n =+8

     
                console.log(fiveDayIndex)


    // 
    // var today = new Date().toLocaleDateString()

    


            }}        
            )})})}
        
 $("#run-search").on("click", function(event){
    var city = $("#search-value").val();
    
    cities.push(city)
    // put if statement to check to see if city is already in cities, if so dont add it
    console.log(cities)
     searchWeather(city)
 });
    

 $("#search-value").keypress(function(event) {
    var city = $("#search-value").val();
    if (event.keyCode === 13) {
        $("#search-value").click();
        cities.push(city)
        // put if statement to check to see if city is already in cities, if so dont add it
        console.log(cities)
         searchWeather(city)

    }
});


function renderCityButtons(){
    $("#search-value").empty()
    $("#searched-cities").empty()
    
    for (var i = 0; i < cities.length; i++){

        var a = $("<button>");
        a.attr("id","searched-cities-" +i);
        a.addClass('city')

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
//   $("#run-search").on("click", function(event) {
//       if (event.keyCode === 13) {
//           $("#run-search").onclick()
//       }
//     // This line allows us to take advantage of the HTML "submit" property
//     // This way we can hit enter on the keyboard and it registers the search
//     // (in addition to clicks). Prevents the page from reloading on form submit.
//     event.preventDefault();
//   })
  
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
