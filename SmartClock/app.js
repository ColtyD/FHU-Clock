var main = function() {
    
    date();
    
    weather();
    
    color();
    
    sideChange();
    
}



$(document).ready(main);

    function color() {

       $("#color").animate(
           {backgroundColor: "rgb( 169, 204, 124 )"},{duration:8000}); 
        
       sideChange();
        
        $("#color").animate(
            {backgroundColor: "rgb( 128, 204, 179 )"}, {duration:8000}); 
        
        $("#color").animate(
            {backgroundColor: "rgb( 130, 130, 204 )"}, {duration:8000}); 
        
         $("#color").animate(
            {backgroundColor: "rgb( 204, 130, 194 )"}, {duration:8000}); 
        
         $("#color").animate(
            {backgroundColor: "rgb( 204, 127, 123 )"}, {duration:8000});
        
       sideChange();
        
         $("#color").animate(
            {backgroundColor: "rgb( 204, 183, 97 )"}, {duration:8000}); 
        
         $("#color").animate(
            {backgroundColor: "rgb( 150, 50, 150 )"}, {duration:8000}); 
        
         $("#color").animate(
            {function:color()});
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

        setTimeout(function(){document.getElementById('scheduleBlock').style.display = 'none'}, 10000); 
        
        setTimeout(function(){document.getElementById('scheduleBlock').style.display = 'block'}, 20000); 


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
        