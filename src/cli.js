import { program } from "commander";
import chalk from "chalk";
import { convert } from "./convert.js";
import { units } from "./units.js";

/**
 * Gets a list of supported unit types
 * @returns {string[]} Array of supported unit type names
 */
function getSupportedUnitTypes() {
  return Object.keys(units);
}

/**
 * Gets a list of supported units for a given unit type
 * @param {string} unitType - The unit type (e.g., 'length', 'mass')
 * @returns {string[]} Array of supported unit abbreviations
 */
function getSupportedUnits(unitType) {
  const unitConfig = units[unitType];
  if (!unitConfig) return [];

  if (unitType === "temperature") {
    // For temperature, extract units from conversion keys
    return Object.keys(unitConfig.conversions).flatMap((key) => key.split("-"));
  }

  return Object.keys(unitConfig.units);
}

/**
 * Formats a number to a reasonable number of decimal places
 * @param {number} value - The number to format
 * @returns {string} Formatted number string
 */
function formatNumber(value) {
  // If it's a whole number, return as is
  if (Number.isInteger(value)) {
    return value.toString();
  }

  // For decimals, limit to 10 significant digits
  return parseFloat(value.toPrecision(10)).toString();
}

/**
 * Displays information about available unit types
 */
function showUnitTypes() {
  console.log(chalk.cyan("\n📚 Tipos de Unidades Suportados:\n"));

  const unitTypesList = getSupportedUnitTypes();
  unitTypesList.forEach((type) => {
    const units_in_type = getSupportedUnits(type);
    console.log(chalk.yellow(`  ${type}:`));
    console.log(
      chalk.gray(
        `    ${units_in_type.slice(0, 8).join(", ")}${units_in_type.length > 8 ? ", ..." : ""}\n`,
      ),
    );
  });
}

/**
 * Displays information about units in a specific type
 * @param {string} unitType - The unit type to show
 */
function showUnitsForType(unitType) {
  const supportedTypes = getSupportedUnitTypes();

  if (!supportedTypes.includes(unitType)) {
    console.error(chalk.red(`✗ Tipo de unidade inválido: ${unitType}\n`));
    console.log(chalk.cyan("Tipos suportados:"));
    supportedTypes.forEach((t) => {
      console.log(chalk.gray(`  - ${t}`));
    });
    process.exit(1);
  }

  const unitsList = getSupportedUnits(unitType);
  console.log(chalk.cyan(`\n📊 Unidades para ${chalk.yellow(unitType)}:\n`));
  unitsList.forEach((unit) => {
    console.log(chalk.gray(`  ${unit}`));
  });
  console.log();
}

/**
 * Performs the conversion and displays the result
 * @param {number} value - The value to convert
 * @param {string} fromUnit - Source unit
 * @param {string} toUnit - Target unit
 * @param {string} unitType - Unit type
 */
function performConversion(value, fromUnit, toUnit, unitType) {
  try {
    const result = convert(value, fromUnit, toUnit, unitType);
    const formattedValue = formatNumber(value);
    const formattedResult = formatNumber(result);

    console.log(chalk.green("\n✓ Conversão realizada com sucesso!\n"));
    console.log(
      chalk.cyan(
        `  ${chalk.white(formattedValue)} ${chalk.yellow(fromUnit)} = ${chalk.white(formattedResult)} ${chalk.yellow(toUnit)}`,
      ),
    );
    console.log();

    return result;
  } catch (error) {
    console.error(chalk.red(`\n✗ Erro na conversão: ${error.message}\n`));
    process.exit(1);
  }
}

/**
 * Initializes and configures the CLI
 */
export function cli() {
  program
    .name("unit-converter")
    .description(
      chalk.cyan(
        "Conversor de Unidades Físicas - Converta entre diferentes unidades de medida",
      ),
    )
    .version("1.0.0", "-v, --version", "Mostra a versão do programa");

  // Convert command
  program
    .command("convert <value> <fromUnit> <toUnit> <unitType>")
    .description(
      "Converte um valor de uma unidade para outra\n" +
      "                     Exemplo: convert 100 cm m length",
    )
    .action((value, fromUnit, toUnit, unitType) => {
      const numValue = parseFloat(value);

      if (isNaN(numValue)) {
        console.error(
          chalk.red(`\n✗ Valor inválido: "${value}" não é um número\n`),
        );
        process.exit(1);
      }

      performConversion(numValue, fromUnit, toUnit, unitType);
    });

  // List command - show all unit types
  program
    .command("list")
    .description("Lista todos os tipos de unidades disponíveis")
    .action(() => {
      showUnitTypes();
    });

  // Units command - show units for a specific type
  program
    .command("units <unitType>")
    .description(
      "Lista todas as unidades de um tipo específico\n" +
      "                Exemplo: units length",
    )
    .action((unitType) => {
      showUnitsForType(unitType);
    });

  // Help examples
  program.addHelpText(
    "after",
    `
${chalk.cyan("Exemplos de Uso:")}

  ${chalk.yellow("Conversões básicas:")}
    $ unit-converter convert 100 cm m length
    $ unit-converter convert 1 kg lb mass
    $ unit-converter convert 32 f c temperature
    $ unit-converter convert 1 km mi length

  ${chalk.yellow("Ver tipos de unidades:")}
    $ unit-converter list

  ${chalk.yellow("Ver unidades de um tipo:")}
    $ unit-converter units length
    $ unit-converter units mass
    $ unit-converter units temperature

${chalk.cyan("Tipos de Unidades Suportados:")}
  length           - Comprimento (m, cm, km, in, ft, mi, etc)
  mass             - Massa (kg, g, lb, oz, t, etc)
  time             - Tempo (s, ms, min, h, d, etc)
  temperature      - Temperatura (c, f, k)
  current          - Corrente Elétrica (A, mA, kA, etc)
  area             - Área (m2, cm2, km2, hectare, acre, etc)
  volume           - Volume (m3, l, ml, gal, etc)
  substanceAmount  - Quantidade de Substância (mol, mmol, etc)
  luminousIntensity - Intensidade Luminosa (cd, mcd, kcd, etc)
`,
  );

  program.parse(process.argv);

  // Show help if no command is provided
  if (process.argv.length < 3) {
    program.outputHelp();
  }
}

// Run CLI if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  cli();
}
