describe('DOM', function(){
  beforeEach(function() {
    loadFixtures('Thermostat.html')
  });

  it(“increments a counter”, function() {
    var $temp = $('#temp');
    var $increase = $('#increase');

    $button.click();
    expect($counter.text()).toContainText(“21”);

  });

});
