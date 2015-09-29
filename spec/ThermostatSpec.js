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
});
