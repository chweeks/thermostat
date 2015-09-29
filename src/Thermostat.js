function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increase_temp = function() {
  this.temperature ++
};

Thermostat.prototype.decrease_temp = function() {
  this.temperature --
};
