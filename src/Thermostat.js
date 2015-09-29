function Thermostat() {
  this.temperature = 20;
  this.minimum = 10;
};

Thermostat.prototype.increase_temp = function() {
  this.temperature ++
};

Thermostat.prototype.decrease_temp = function() {
  if (this.temperature > this.minimum) {
    this.temperature --
  } else {
    throw 'Cannot go below the minimum';
  }
};
