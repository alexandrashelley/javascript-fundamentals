class Thermostat {
  constructor() {
    this.temperature = 20;
    this.savingMode = false;
  }
  getTemperature() {
    if (this.savingMode === true && this.temperature > 25) {
      this.temperature = 25;
    }
    return this.temperature;
  }

  up() {
    this.temperature += 1;
    if (this.savingMode === false && this.temperature > 32) {
      this.temperature = 32;
    } else {
      this.temperature;
    }
  }

  down() {
    this.temperature -= 1;
    if (this.temperature < 10) {
      this.temperature = 10;
    } else {
      this.temperature;
    }
  }

  setPowerSavingMode(savingMode) {
    if (savingMode === this.savingMode) {
      this.savingMode;
    } else {
      this.savingMode = savingMode;
    };
  };

  reset() {
    this.temperature = 20;
  };
};

module.exports = Thermostat;
