$( document ).ready (function() {
  $( "#increase" ).click(function( event ) {

    thermostat.increaseTemp();

    });

  $( "#decrease" ).click(function( event ) {

        thermostat.decreaseTemp();

    });

  $( "#reset" ).click(function( event ) {

        alert( "Clicked Reset!" );

    });
    $( "#powersaveon" ).click(function( event ) {

              alert( "Clicked PowerSave On!" );

          });
    $( "#powersaveoff" ).click(function( event ) {

          alert( "Clicke PowerSave Off!" );

      });
});
