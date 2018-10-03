describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20', function() {
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('can increase temperature', function() {
    thermostat.up(4);
    expect(thermostat.temperature).toEqual(24);
  });

  it('can decrease temperature', function() {
    thermostat.down(8);
    expect(thermostat.temperature).toEqual(12);
  });

  it('cannot go below 10', function() {
    thermostat.down(17);
    expect(thermostat.temperature).toEqual(thermostat.minTemperature);
  });

  it('if power saving mode is on max temperature is 25', function() {
    thermostat.up(10);
    expect(thermostat.temperature).toEqual(thermostat.maxTemperaturePSMOn);
  });

  it('if power saving mode is off max temperature is 32', function() {
    thermostat.setPSM(false);
    thermostat.up(30);
    expect(thermostat.temperature).toEqual(thermostat.maxTemperaturePSMOff);
  });

  it('resets the temperature to default temperature', function() {
    thermostat.up(10);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('returns low usage when temperature is less than 18', function() {
    thermostat.down(5);
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it('returns medium usage when temperature is between 18 and 25', function() {
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });

  it('returns high usage when temperature is more than or equal to 25', function() {
    thermostat.up(15);
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });


});
