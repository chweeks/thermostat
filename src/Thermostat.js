function Thermostat() {
  this.temperature = 20;
  this.minimum = 10;
  this.isPowerSaving = true
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature ++
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > this.minimum) {
    this.temperature -- }
  else {
    throw 'Cannot go below the minimum';
  }
};

Thermostat.prototype.powerSavingOff = function() {
  this.isPowerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  this.isPowerSaving = true;
};
