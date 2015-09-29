loadFixtures('Thermostat.html')

describe('DOM', function(){

  it('contains increase temp button',function(){
    $('#increase').click
    expect('thermostat.increase').toHaveBeenTriggered()
  });
});
