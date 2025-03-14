/**
 * PassPanda | random string generator implementation
 */

import {
    UPPERCASE_LETTERS,
    LOWERCASE_LETTERS,
    NUMBERS,
    SPECIAL_CHARS,
} from "./../util/charCollections"

/**
 * Generate random string
 * @param {number} length String length
 * @param {boolean} numbers Use numbers
 * @param {boolean} uppercaseLetters Use uppercase letters
 * @param {boolean} lowercaseLetters Use lowercase letters
 * @param {boolean} specialChars Use special characters
 * @returns {string} generated random string
 */
export const generateRandomString = (
    length,
    numbers,
    uppercaseLetters,
    lowercaseLetters,
    specialChars
) => {
    let chars = ""

    if (numbers) chars += NUMBERS
    if (uppercaseLetters) chars += UPPERCASE_LETTERS
    if (lowercaseLetters) chars += LOWERCASE_LETTERS
    if (specialChars) chars += SPECIAL_CHARS

    const charArray = Array.from(chars)

    const randomValues = new Uint32Array(length)
    window.crypto.getRandomValues(randomValues)

    return Array.from(
        randomValues,
        (value) => charArray[value % charArray.length]
    ).join("")
}
