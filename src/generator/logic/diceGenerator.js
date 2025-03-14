/**
 * PassPanda | random dice generation functions/Diceware implementation
 */

import camelCase from "camelcase"

import { words } from "./../util/effLargeWordlist"
import { SPECIAL_CHARS } from "./../util/charCollections"

/**
 * Generate dice passphrase
 * @param {number} wordCount Amount of words to generate
 * @returns {string} generated passphrase
 */
export const generatePassphrase = (wordCount) => {
    let res = ""

    for (let i = 0; i < wordCount; i++) {
        const word = getRandomWord()
        const between = getRandomCharacterBetween()

        res = res.concat("-", word, between)
    }

    return camelCase(res, {
        pascalCase: true,
    })
}

/**
 * Generate a random character or nothing
 * @returns {string} random character
 */
export const getRandomCharacterBetween = () => {
    const insertCharacter = randInt(0, 2)

    if (insertCharacter !== 0) {
        return ""
    }

    const numberOrSpecial = randInt(0, 1)

    if (numberOrSpecial === 0) {
        return randInt(0, 9).toString()
    }

    const specialCharI = randInt(0, SPECIAL_CHARS.length - 1)
    return SPECIAL_CHARS[specialCharI]
}

/**
 * Get a random word from the dice list
 * @returns {string} random word
 */
export const getRandomWord = () => {
    const idLength = 5
    let results = ""

    for (let i = 0; i < idLength; i++) {
        const diceRes = throwDice()

        results = results.concat(diceRes.toString())
    }

    return words[results]
}

/**
 * Virtually throw dice
 * @returns {number} Random number between 1 and 6
 */
const throwDice = () => {
    return randInt(1, 6)
}

/**
 * Generate cryptographically secure random number
 * @param {number} min Minimum (integer)
 * @param {number} max Maximum (integer)
 * @returns {number} Random integer between min and max
 */
const randInt = (min, max) => {
    const randBuffer = new Uint32Array(1)

    window.crypto.getRandomValues(randBuffer)

    const randNum = randBuffer[0] / (0xffffffff + 1)

    return Math.floor(randNum * (max - min + 1)) + min
}
