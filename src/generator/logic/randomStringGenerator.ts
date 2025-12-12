/**
 * PassPanda | random string generator implementation
 */

import {
    UPPERCASE_LETTERS,
    LOWERCASE_LETTERS,
    NUMBERS,
    SPECIAL_CHARS,
} from "../util/charCollections"

/**
 * Generate a random string
 */
export const generateRandomString = (
    length: number,
    numbers: boolean,
    uppercaseLetters: boolean,
    lowercaseLetters: boolean,
    specialChars: boolean
): string => {
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
