var Thermostat = function() {

  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
  this.maxTemperaturePSMOn = 25;
  this.maxTemperaturePSMOff = 32;
  this.minTemperature = 10;
  this.lowUsageBound = 18;
  this.mediumUsageBound = 25;

};

Thermostat.prototype.up = function(number) {
  if (this.temperature + number > this.maxTemperaturePSMOn && this.powerSaving === true )  {
    this.temperature = this.maxTemperaturePSMOn;
  } else if ( this.temperature + number > this.maxTemperaturePSMOff && this.powerSaving === false ) {
    this.temperature = this.maxTemperaturePSMOff;
  } else {
    this.temperature += number;
  }
};

Thermostat.prototype.down = function(number) {
  if (this.temperature - number < this.minTemperature ) {
    this.temperature = this.minTemperature;
  } else {
    this.temperature -= number;
  }
};

Thermostat.prototype.setPSM = function(boolean) {
  if (boolean === true && this.temperature > this.maxTemperaturePSMOn ) {
    this.temperature = this.maxTemperaturePSMOn;
  } else {
  this.powerSaving = boolean;
}
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < this.lowUsageBound ) {
    return 'low-usage';
  } else if (this.temperature < this.mediumUsageBound ) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
