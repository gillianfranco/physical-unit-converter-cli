import { units } from "./units.js";

/**
 * Converts a value from one unit to another within the same unit type.
 *
 * Supports conversion between:
 * - Length: m, km, cm, mm, in, ft, yd, mi, nmi, etc.
 * - Mass: kg, g, mg, lb, oz, t, etc.
 * - Time: s, ms, us, min, h, d, etc.
 * - Current: A, mA, kA, etc.
 * - Substance Amount: mol, mmol, kmol, etc.
 * - Luminous Intensity: cd, mcd, kcd, etc.
 * - Area: m2, km2, cm2, hectare, acre, etc.
 * - Volume: m3, cm3, l, ml, gal, etc.
 * - Temperature: c, f, k (with special conversion functions)
 *
 * @param {number} value - The numerical value to convert
 * @param {string} fromUnit - Source unit abbreviation (e.g., 'cm', 'kg', 'f')
 * @param {string} toUnit - Target unit abbreviation (e.g., 'm', 'g', 'c')
 * @param {string} unitType - Type of unit category (e.g., 'length', 'mass', 'temperature')
 *
 * @returns {number} The converted value
 *
 * @throws {Error} If value is not a number
 * @throws {Error} If unitType is invalid or not supported
 * @throws {Error} If fromUnit or toUnit is not valid for the given unitType
 * @throws {Error} If temperature conversion path doesn't exist
 *
 * @example
 * // Length conversion
 * convert(100, 'cm', 'm', 'length') // => 1
 *
 * @example
 * // Temperature conversion
 * convert(0, 'c', 'f', 'temperature') // => 32
 *
 * @example
 * // Mass conversion with floating point result
 * convert(1, 'kg', 'lb', 'mass') // => 2.20462
 */
export function convert(value, fromUnit, toUnit, unitType) {
  // Validate inputs
  if (typeof value !== "number" || isNaN(value)) {
    throw new Error("Value must be a number");
  }

  if (!unitType || !units[unitType]) {
    throw new Error("Invalid unit type");
  }

  // Same unit conversion (optimization)
  if (fromUnit === toUnit) {
    return value;
  }

  // Special handling for temperature (uses direct conversion functions instead of factors)
  if (unitType === "temperature") {
    const conversionKey = `${fromUnit}-${toUnit}`;
    const conversionFunc = units.temperature.conversions[conversionKey];

    if (conversionFunc) {
      return conversionFunc(value);
    }
    throw new Error(`Invalid temperature conversion: ${fromUnit} to ${toUnit}`);
  }

  // Standard factor-based conversion
  const unitConfig = units[unitType];

  if (!unitConfig.units[fromUnit]) {
    throw new Error(
      `Invalid unit: ${fromUnit} is not a valid ${unitType} unit`,
    );
  }

  if (!unitConfig.units[toUnit]) {
    throw new Error(`Invalid unit: ${toUnit} is not a valid ${unitType} unit`);
  }

  const fromFactor = unitConfig.units[fromUnit];
  const toFactor = unitConfig.units[toUnit];

  // Convert to base unit, then to target unit
  // This two-step approach simplifies the conversion logic:
  // value (fromUnit) -> baseValue (base unit) -> result (toUnit)
  const baseValue = value * fromFactor;
  return baseValue / toFactor;
}
