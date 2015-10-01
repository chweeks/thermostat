$( document ).ready (function() {

  var update = function(){
    $( "#temp" ).text(thermostat.temperature);
    $( "#weather" ).text(thermostat.weather);
    $( "#usage").attr('style','color:'+ thermostat.energyUsage());
  }
  $('#weather_city').val('London')
  weatherForm();
  update();

  function weatherForm() {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      jsonp: 'callback',
      dataType: 'jsonp',
      cache: false,
      data: {
        q: $('#weather_city').val(),
      },
      // work with the response
      success: function (response) {
        $('#weather_description').text(response.weather[0].description);
        $('#weather_temp').text(Math.round(((response.main.temp)-272)));
        $('#weather_wind').text(response.wind.speed);
      },
    });
  }
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
