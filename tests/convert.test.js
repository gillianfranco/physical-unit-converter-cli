import { convert } from "../src/convert.js";

describe("convert() - same unit conversions", () => {
  test("returns same value when converting to same unit - length", () => {
    expect(convert(5, "m", "m", "length")).toBe(5);
  });

  test("returns same value when converting to same unit - mass", () => {
    expect(convert(10, "kg", "kg", "mass")).toBe(10);
  });

  test("returns same value when converting to same unit - time", () => {
    expect(convert(7, "s", "s", "time")).toBe(7);
  });
});

describe("convert() - length conversions", () => {
  test("converts centimeters to meters", () => {
    expect(convert(100, "cm", "m", "length")).toBe(1);
  });

  test("converts meters to centimeters", () => {
    expect(convert(1, "m", "cm", "length")).toBe(100);
  });

  test("converts kilometers to meters", () => {
    expect(convert(1, "km", "m", "length")).toBe(1000);
  });

  test("converts meters to kilometers", () => {
    expect(convert(1000, "m", "km", "length")).toBe(1);
  });

  test("converts millimeters to centimeters", () => {
    expect(convert(10, "mm", "cm", "length")).toBe(1);
  });
});

describe("convert() - mass conversions", () => {
  test("converts grams to kilograms", () => {
    expect(convert(1000, "g", "kg", "mass")).toBe(1);
  });

  test("converts kilograms to grams", () => {
    expect(convert(1, "kg", "g", "mass")).toBe(1000);
  });

  test("converts kilograms to pounds", () => {
    expect(convert(1, "kg", "lb", "mass")).toBeCloseTo(2.20462, 5);
  });

  test("converts pounds to kilograms", () => {
    expect(convert(1, "lb", "kg", "mass")).toBeCloseTo(0.453592, 5);
  });

  test("converts milligrams to grams", () => {
    expect(convert(1000, "mg", "g", "mass")).toBe(1);
  });
});

describe("convert() - time conversions", () => {
  test("converts minutes to seconds", () => {
    expect(convert(1, "min", "s", "time")).toBe(60);
  });

  test("converts seconds to minutes", () => {
    expect(convert(60, "s", "min", "time")).toBe(1);
  });

  test("converts hours to seconds", () => {
    expect(convert(1, "h", "s", "time")).toBe(3600);
  });

  test("converts hours to minutes", () => {
    expect(convert(1, "h", "min", "time")).toBe(60);
  });

  test("converts days to hours", () => {
    expect(convert(1, "d", "h", "time")).toBe(24);
  });

  test("converts milliseconds to seconds", () => {
    expect(convert(1000, "ms", "s", "time")).toBe(1);
  });
});

describe("convert() - temperature conversions", () => {
  test("converts Celsius to Fahrenheit", () => {
    expect(convert(0, "c", "f", "temperature")).toBe(32);
    expect(convert(100, "c", "f", "temperature")).toBe(212);
  });

  test("converts Fahrenheit to Celsius", () => {
    expect(convert(32, "f", "c", "temperature")).toBe(0);
    expect(convert(212, "f", "c", "temperature")).toBe(100);
  });

  test("converts Celsius to Kelvin", () => {
    expect(convert(0, "c", "k", "temperature")).toBe(273.15);
    expect(convert(100, "c", "k", "temperature")).toBe(373.15);
  });

  test("converts Kelvin to Celsius", () => {
    expect(convert(273.15, "k", "c", "temperature")).toBe(0);
    expect(convert(373.15, "k", "c", "temperature")).toBe(100);
  });

  test("converts Fahrenheit to Kelvin", () => {
    expect(convert(32, "f", "k", "temperature")).toBeCloseTo(273.15, 2);
  });

  test("converts Kelvin to Fahrenheit", () => {
    expect(convert(273.15, "k", "f", "temperature")).toBeCloseTo(32, 2);
  });

  test("same temperature unit returns same value", () => {
    expect(convert(25, "c", "c", "temperature")).toBe(25);
    expect(convert(77, "f", "f", "temperature")).toBe(77);
    expect(convert(298, "k", "k", "temperature")).toBe(298);
  });
});

describe("convert() - current conversions", () => {
  test("converts amperes to milliamperes", () => {
    expect(convert(1, "A", "mA", "current")).toBe(1000);
  });

  test("converts kiloamperes to amperes", () => {
    expect(convert(1, "kA", "A", "current")).toBe(1000);
  });

  test("converts milliamperes to amperes", () => {
    expect(convert(500, "mA", "A", "current")).toBe(0.5);
  });
});

describe("convert() - substance amount conversions", () => {
  test("converts moles to millimoles", () => {
    expect(convert(1, "mol", "mmol", "substanceAmount")).toBeCloseTo(1000, 5);
  });

  test("converts kilomoles to moles", () => {
    expect(convert(1, "kmol", "mol", "substanceAmount")).toBeCloseTo(1000, 5);
  });

  test("converts millimoles to micromoles", () => {
    expect(convert(1, "mmol", "umol", "substanceAmount")).toBeCloseTo(1000, 5);
  });
});

describe("convert() - luminous intensity conversions", () => {
  test("converts candelas to millicandelas", () => {
    expect(convert(1, "cd", "mcd", "luminousIntensity")).toBe(1000);
  });

  test("converts kilocandelas to candelas", () => {
    expect(convert(1, "kcd", "cd", "luminousIntensity")).toBe(1000);
  });

  test("converts millicandelas to candelas", () => {
    expect(convert(500, "mcd", "cd", "luminousIntensity")).toBe(0.5);
  });
});

describe("convert() - area conversions", () => {
  test("converts square meters to square centimeters", () => {
    expect(convert(1, "m2", "cm2", "area")).toBe(10000);
  });

  test("converts square kilometers to square meters", () => {
    expect(convert(1, "km2", "m2", "area")).toBe(1000000);
  });

  test("converts hectares to square meters", () => {
    expect(convert(1, "hectare", "m2", "area")).toBe(10000);
  });

  test("converts acres to hectares", () => {
    expect(convert(1, "acre", "hectare", "area")).toBeCloseTo(0.404686, 5);
  });
});

describe("convert() - volume conversions", () => {
  test("converts cubic meters to liters", () => {
    expect(convert(1, "m3", "l", "volume")).toBeCloseTo(1000, 5);
  });

  test("converts liters to milliliters", () => {
    expect(convert(1, "l", "ml", "volume")).toBeCloseTo(1000, 5);
  });

  test("converts gallons to liters", () => {
    expect(convert(1, "gal", "l", "volume")).toBeCloseTo(3.785, 3);
  });

  test("converts cubic centimeters to milliliters", () => {
    expect(convert(1, "cm3", "ml", "volume")).toBeCloseTo(1, 5);
  });
});

describe("convert() - input validation", () => {
  test("throws error for invalid unit type", () => {
    expect(() => convert(1, "m", "cm", "invalid")).toThrow("Invalid unit type");
  });

  test("throws error for invalid from unit", () => {
    expect(() => convert(1, "xyz", "cm", "length")).toThrow("Invalid unit");
  });

  test("throws error for invalid to unit", () => {
    expect(() => convert(1, "m", "xyz", "length")).toThrow("Invalid unit");
  });

  test("throws error for non-numeric value", () => {
    expect(() => convert("abc", "m", "cm", "length")).toThrow(
      "Value must be a number",
    );
  });

  test("throws error for null value", () => {
    expect(() => convert(null, "m", "cm", "length")).toThrow(
      "Value must be a number",
    );
  });

  test("throws error for undefined unitType", () => {
    expect(() => convert(1, "m", "cm")).toThrow("Invalid unit type");
  });

  test("throws error for undefined fromUnit", () => {
    expect(() => convert(1, undefined, "cm", "length")).toThrow("Invalid unit");
  });

  test("throws error for NaN value", () => {
    expect(() => convert(NaN, "m", "cm", "length")).toThrow(
      "Value must be a number",
    );
  });
});

describe("convert() - boundary cases", () => {
  test("handles zero value for length conversion", () => {
    expect(convert(0, "m", "cm", "length")).toBe(0);
  });

  test("handles zero value for temperature conversion", () => {
    expect(convert(0, "c", "f", "temperature")).toBe(32);
  });

  test("handles negative values for length", () => {
    expect(convert(-10, "m", "cm", "length")).toBe(-1000);
  });

  test("handles negative values for temperature", () => {
    expect(convert(-40, "c", "f", "temperature")).toBe(-40);
  });

  test("handles very small values", () => {
    expect(convert(0.001, "km", "m", "length")).toBe(1);
  });

  test("handles very large values", () => {
    expect(convert(1000000, "mm", "km", "length")).toBe(1);
  });

  test("handles decimal values in length", () => {
    expect(convert(1.5, "m", "cm", "length")).toBe(150);
  });

  test("handles decimal values in mass", () => {
    expect(convert(2.5, "kg", "g", "mass")).toBe(2500);
  });

  test("handles precision for imperial to metric conversions", () => {
    expect(convert(1, "in", "m", "length")).toBeCloseTo(0.0254, 10);
  });

  test("handles floating point calculations correctly", () => {
    const result = convert(100, "cm", "in", "length");
    expect(result).toBeCloseTo(39.3701, 4);
  });

  test("handles very small decimals in conversions", () => {
    expect(convert(0.001, "m", "mm", "length")).toBeCloseTo(1, 5);
  });
});
