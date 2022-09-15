// TODO: add unit tests

/**
 * Trims the values and compare them in a case insensitive way
 * @param valueA {string}
 * @param valueB {string}
 * @returns {boolean}
 */
const compare = (valueA: string, valueB: string): boolean =>
  standarize(valueA) === standarize(valueB)

/**
 * Adds a letter 's' at the end of a singular term
 * when units is greater than one
 * @param singularTerm {string}
 * @param units {number}
 * @returns {string}
 */
const pluralize = (singularTerm: string, units: number): string =>
  `${singularTerm}${units > 1 ? "s" : ""}`

/**
 * Returns 'are' or 'is' depending on the number of units
 * @param units {number}
 * @returns {string}
 */
const pluralizeToBe = (units: number): string => `${units > 1 ? "are" : "is"}`

/**
 * Trims spaces and converts the string to Upper Case
 * @param dirtyString {string}
 * @returns {string}
 */
const standarize = (dirtyString: string): string =>
  String(dirtyString).trim().toUpperCase()

/**
 * Convert single word string to Pascal Case
 * @param singleWord {string}
 * @returns {string}
 */
const toPascalCase = (singleWord: string): string =>
  singleWord.charAt(0).toUpperCase() + singleWord.slice(1).toLowerCase()

export { compare, pluralize, pluralizeToBe, standarize, toPascalCase }
