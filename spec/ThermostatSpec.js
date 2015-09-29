describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees when initialized', function() {
    expect(thermostat.temperature).toBe(20)
  });

  it('increases temperature by one degree', function() {
    thermostat.increase_temp();
    expect(thermostat.temperature).toBe(21);
  });

  it('decreases temperature by one degree', function() {
    thermostat.decrease_temp();
    expect(thermostat.temperature).toBe(19)
  });
  it('has a minimum temperature of 10 degrees', function() {
    expect(thermostat.minimum).toBe(10)
  })
  it('cannot go below minimum temperature', function() {
    thermostat.temperature = 10;
    expect(function(){thermostat.decrease_temp();}).toThrow('Cannot go below the minimum')
  })

});
