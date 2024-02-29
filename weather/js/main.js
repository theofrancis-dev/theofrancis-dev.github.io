/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
var weatherUrl = config.urlHead + "33015" + config.urlTail;
var forecastUrl = config.urlForecastHead + "33015" + config.urlTail;
weatherConditions.open('GET', weatherUrl , true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('location').innerHTML=cObj.name;
        document.getElementById('weather').innerHTML=cObj.weather[0].description;
        document.getElementById('temperature').innerHTML=cObj.main.temp;
        document.getElementById('desc').innerHTML="Wind Speed: "+cObj.wind.speed;

    } //end if
}; //end function










// GET THE FORECARST
weatherForecast.open('GET', forecastUrl, true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);

    // Day 1
    //remove year and time
    var date_raw = fObj.list[0].dt_txt;
	date_raw = date_raw.substring(5,11);
    document.getElementById('r1c1').innerHTML=date_raw;

    //get the icon
    var iconcode = fObj.list[0].weather[0].icon;
    var icon_url = config.icon_path + iconcode + config.icon_ext;
    document.getElementById('r1c2').src = icon_url;
    document.getElementById('r1c3').innerHTML = fObj.list[0].main.temp_min + "&deg;";
    document.getElementById('r1c4').innerHTML = fObj.list[0].main.temp_max + "&deg;";

    // Day 2
    //remove year and time
    var date_raw = fObj.list[8].dt_txt;
	date_raw = date_raw.substring(5,11);
    document.getElementById('r2c1').innerHTML=date_raw;

    //get the icon
    var iconcode = fObj.list[8].weather[0].icon;
    var icon_url = config.icon_path + iconcode + config.icon_ext;
    document.getElementById('r2c2').src = icon_url;
    document.getElementById('r2c3').innerHTML = fObj.list[8].main.temp_min + "&deg;";
    document.getElementById('r2c4').innerHTML = fObj.list[8].main.temp_max + "&deg;";

    // Day 2
    //remove year and time
    var date_raw = fObj.list[16].dt_txt;
	date_raw = date_raw.substring(5,11);
    document.getElementById('r3c1').innerHTML=date_raw;

    //get the icon
    var iconcode = fObj.list[16].weather[0].icon;
    var icon_url = config.icon_path + iconcode + config.icon_ext;
    document.getElementById('r3c2').src = icon_url;
    document.getElementById('r3c3').innerHTML = fObj.list[16].main.temp_min + "&deg;";
    document.getElementById('r3c4').innerHTML = fObj.list[16].main.temp_max + "&deg;";

} //end if
}; //end function


