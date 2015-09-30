function Thermostat() {
  this.temperature = 20;
  this.minimum = 10;
  this.powerSavingOn();
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temperature < this.maximum) {
    this.temperature ++
  } else {
    throw 'Cannot exceed the max temp';
  }

};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > this.minimum) {
    this.temperature -- }
  else {
    throw 'Cannot go below the minimum';
  }
};

Thermostat.prototype.powerSavingOff = function() {
  this.maximum = 32;
  this.isPowerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  this.maximum = 25;
  this.isPowerSaving = true;
  if(this.temperature > 25) this.temperature = 25;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) return("green");
  if (this.temperature < 25) return("yellow");
  return ("red");
};

thermostat = new Thermostat();
