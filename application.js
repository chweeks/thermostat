$( document ).ready (function() {

  var update = function(){
    $( "#temp" ).text(thermostat.temperature);
    $( "#usage").attr('style','color:'+ thermostat.energyUsage());
  }

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
