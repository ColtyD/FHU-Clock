var main = function() {
    
       var currentTime = new Date().getHours();
        
        console.log(currentTime); 
    
    
    date();                     // Good
    
    getLionAlerts();            // Get this to: respond to time, Hide and Show when needed
    
    weather();                  // Good
    
    sideChange();               // Fixed
    
    if(currentTime > 1 && currentTime <= 11){colorMorning();}; //Morning Colors
    
    if(currentTime > 12 && currentTime <= 17){color();}; // Evening colors
    
    if(currentTime > 18 && currentTime <= 24){colorNight();}; //Night colors
    
    
    
    
}



$(document).ready(main);

    function color() {

       $("#color").animate(
           {color: "rgb( 140, 232, 160 )"},{duration:10000}); 
        
        $("#color").animate(
            {color: "rgb( 155, 193, 212 )"}, {duration:10000}); 
        
        $("#color").animate(
            {color: "rgb( 255, 251, 154 )"}, {duration:10000}); 
        
         $("#color").animate(
            {color: "rgb( 232, 184, 128 )"}, {duration:10000}); 
        
         $("#color").animate(
            {color: "rgb( 255, 141, 162 )"}, {duration:10000});
        
        
         $("#color").animate(
            {function:color()});
    
        };

    function colorMorning() {

       $("#color").animate(
           {color: "rgb( 113, 175, 204 )"},{duration:10000}); 
        
        $("#color").animate(
            {color: "rgb( 164, 201, 189 )"}, {duration:10000}); 
        
        $("#color").animate(
            {color: "rgb( 208, 222, 185 )"}, {duration:10000}); 
        
         $("#color").animate(
            {color: "rgb( 255, 243, 172 )"}, {duration:10000}); 
        
         $("#color").animate(
            {color: "rgb( 255, 222, 85 )"}, {duration:10000});
        
        
         $("#color").animate(
            {function:colorMorning()});
    
        };

    function colorNight() {

       $("#color").animate(
           {color: "rgb( 20, 26, 38 )"},{duration:10000}); 
        
        $("#color").animate(
            {color: "rgb( 54, 70, 89 )"}, {duration:10000}); 
        
        $("#color").animate(
            {color: "rgb( 52, 55, 56 )"}, {duration:10000}); 
        
         $("#color").animate(
            {color: "rgb( 73, 73, 76 )"}, {duration:10000}); 
        
         $("#color").animate(
            {color: "rgb( 104, 105, 112 )"}, {duration:10000});
        
        
         $("#color").animate(
            {function:colorNight()});
    
        };
    
    function date(){
            var d = new Date();
            var weekday = new Array(7);
            weekday[0]=  "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var n = weekday[d.getDay()];
            var q = d.toLocaleDateString();
             document.getElementById("demo").innerHTML = n ;
            document.getElementById("numberDate").innerHTML = q ;
        };
        
    function sideChange(){
        setInterval(function(){document.getElementById('scheduleBlock').style.display = 'none'}, 10000); 
        
        setInterval(function(){document.getElementById('scheduleBlock').style.display = 'block'}, 20000); 
     };

    function weather(){
        
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=38340,us&units=imperial&appid=1dad7c4dbd2f4a5043ce65e107ca1cce",
            function (data) {
                var temp = data.main.temp;
                var weatherCode = data.weather[0].icon;
                console.log(temp);
                console.log(weatherCode);
                $("#currentTemp").append(temp + " °F");
            
                var newIcon = weatherCode;
            
                if(weatherCode == "01d"){
                    newIcon = "imgs/sunny.png";
                }
                else if(weatherCode == "01dn"){
                    newIcon = "imgs/sunny.png";
                }
                else if(weatherCode == "02d"){
                        newIcon = "imgs/part_cloud.png";
                    }
                else if(weatherCode == "02n"){
                        newIcon = "imgs/part_cloud.png";
                    }
                else if(weatherCode == "03d"){
                        newIcon = "imgs/cloud.png";
                    }
                else if(weatherCode == "03n"){
                        newIcon = "imgs/cloud.png";
                    }
                else if(weatherCode == "04d"){
                        newIcon = "imgs/cloud.png";
                    }
                else if(weatherCode == "04n"){
                        newIcon = "imgs/cloud.png";
                    }
                else if(weatherCode == "09d"){
                        newIcon = "imgs/rain.png";
                    }
                else if(weatherCode == "09n"){
                        newIcon = "imgs/rain.png";
                    }
                else if(weatherCode == "10d"){
                        newIcon = "imgs/rain.png";
                    }
                else if(weatherCode == "10n"){
                        newIcon = "imgs/rain.png";
                    }
                else if(weatherCode == "11d"){
                        newIcon = "imgs/thunder.png";
                    }
                else if(weatherCode == "11n"){
                        newIcon = "imgs/thunder.png";
                    }
                else if(weatherCode == "13d"){
                        newIcon = "imgs/snow.png";
                    }
                else if(weatherCode == "13n"){
                        newIcon = "imgs/snow.png";
                    }
                else if(weatherCode == "50d"){
                        newIcon = "imgs/mist.png";
                    }
                else if(weatherCode == "50n"){
                        newIcon = "imgs/mist.png";
                    }
                else {
                    newIcon = "imgs/sunny.png";
                };

                $("#weatherIcon").html("<img src='" + newIcon  + "'>");
               
                 
        });
                  };

    function getLionAlerts(){ 
        
        // Get the RSS feed 
        
        var rssURL = "http://www.getrave.com/rss/FHU/channel1";
        
        $.ajax({
            type:"GET",
            url: rssURL,
            dataType: "xml",
            error: function(){
                console.log("ERROR: Unable to load RSS feed. CHeck the URL and your connection status.")
            },
            success: function(xml){
                
                
                
                var $items = $(xml).find("item");
                
                $items.each( function(){
                    
                    // Extract the alert Title
                    var lionAlertTitle = $(this).find("title").text();
                    console.log("Lion Alert Title");
                    
                    //How to get pubDate
                    // Check compare the date to current date to only show the ones that around 1 hour old. 
                    
        /*            var lionAlertDateString = $(this).find("pubDate").text();
                    var lionTime = new Date(lionAlertDateString);
                    console.log(lionTime.getHours());
                    console.log(lionTime.getMinutes());
                    var lionTimeToCompare = lionTime.getHours(); 
                    var dateCompare = new Date().getHours();  
                    var newCompare = dateCompare - 1; 
                    console.log(newCompare);
                    
                    while (lionTimeToCompare < newCompare) {
                        // Fix something here to control the Alerts? 
                    }
                    */
               
                    
                    
                    // Extract the alert Discription
                    var lionAlertDescription = $(this).find("description").text();
                    console.log("Lion Alert Description");
                    
                    
                    // Display the Title and Discriptiion on page
                    $("#lionAlert h1").text(lionAlertTitle);
                    $("#lionAlert h2").text(lionAlertDescription);
                      console.log("Inserting Text for Lion Alert");
                    
                     // Show the Alert! 
                    $("#lionAlert").show();
                      console.log("Showing the Lion Alert");
                    
                    
                });                
                
            }
        }); 

        
       
    }
        