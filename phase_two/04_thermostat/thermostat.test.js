
const Thermostat = require('./thermostat');

describe("the Thermostat object", () => {
  it("getting the temperature returns 20 degrees", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("calling up function increases temperature", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("calling down function decreases temperature", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("minimum possible temperature is 10 degrees", () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 10;
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(10);
  });

  it("power-saving mode sets max temperature to 25 degrees", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up(); 
    }
    expect(thermostat.getTemperature()).toBe(25);
   });

   it("if power-saving mode is turned off, max temperature is no longer 25 degrees", () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 25;
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
   });

   it("if power-saving mode is turned off, max temperature is 32 degrees", () => {
    const thermostat = new Thermostat();
    thermostat.temperature = 32;
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(32);
   });

   it("resets temperature back to 20 degrees", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
   })
});









// const thermostat = new Thermostat();

// thermostat.getTemperature(); // should return 20

// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22

// thermostat.down();
// thermostat.getTemperature(); // should now return 21

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20