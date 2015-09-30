$( document ).ready (function() {

  $( "#temp" ).text(thermostat.temperature);

  $( "#increase" ).click(function( event ) {

    thermostat.increaseTemp();
    $( "#temp" ).text(thermostat.temperature);

    });

  $( "#decrease" ).click(function( event ) {

    thermostat.decreaseTemp();
    $( "#temp" ).text(thermostat.temperature);

    });

  $( "#reset" ).click(function( event ) {

    thermostat.reset();
    $( "#temp" ).text(thermostat.temperature);

    });

  $( "#powersave" ).click(function( event ) {

    $( "#powersave" )[0].checked ? thermostat.powerSavingOn() : thermostat.powerSavingOff();
    $( "#temp" ).text(thermostat.temperature);

    });

});
