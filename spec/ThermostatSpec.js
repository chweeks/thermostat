describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees when initialized', function() {
    expect(thermostat.temperature).toBe(20)
  });

  it('increases temperature by one degree', function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature).toBe(21);
  });

  it('decreases temperature by one degree', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toBe(19)
  });

  it('has a minimum temperature of 10 degrees', function() {
    expect(thermostat.minimum).toBe(10)
  })

  it('cannot go below minimum temperature', function() {
    thermostat.temperature = 10;
    expect(function(){thermostat.decreaseTemp();}).toThrow('Cannot go below the minimum')
  })

  it('starts in power saving mode', function() {
    expect(thermostat.isPowerSaving).toBe(true)
  });

  it('can turn power saving mode off', function() {
    thermostat.powerSavingOff()
    expect(thermostat.isPowerSaving).toBe(false)
  });

  it('can turn power saving mode on', function() {
    thermostat.powerSavingOff()
    thermostat.powerSavingOn()
    expect(thermostat.isPowerSaving).toBe(true)
  });

});
