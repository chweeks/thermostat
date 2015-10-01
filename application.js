$( document ).ready (function() {

  var update = function(){
    $( "#temp" ).text(thermostat.temperature);
    $( "#usage" ).attr('style','color:'+ thermostat.energyUsage());
    $( "#weather_temp" ).text(weathertemp);
    $( "#weather_name" ).text(weathername)
  }

  var pathArray = window.location.search;
    var urlCity = pathArray.replace('?city=', '').replace('&Submit=Submit', '');
    var weathertemp;
    var weathername;
    $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + urlCity, {
      success: function(data) {
        weathertemp = Math.round(data.main.temp - 273.15);
        weathername = data.name;
        update();
      }
  });

  update();

  $( "#increase" ).click(function( event ) {

    thermostat.increaseTemp();
    update();

    });

  $( "#decrease" ).click(function( event ) {

    thermostat.decreaseTemp();
    update();

    });

  $( "#reset" ).click(function( event ) {

    thermostat.reset();
    update();

    });

    $( "#powersave" ).click(function( event ) {

    $( "#powersave" )[0].checked ? thermostat.powerSavingOn() : thermostat.powerSavingOff();
    update();

    });

});
