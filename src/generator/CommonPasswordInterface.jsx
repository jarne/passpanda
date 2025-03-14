/**
 * PassPanda | common password generator interface
 */

import { useState, useEffect } from "react"
import { generateRandomString } from "./logic/randomStringGenerator"

function CommonPasswordInterface({ setGeneratedPassword, regenerateCounter }) {
    const DEFAULT_LENGTH = 12
    const DEFAULT_LETTERS = true
    const DEFAULT_NUMBERS = true
    const DEFAULT_SPECIAL_CHARS = true

    const [length, setLength] = useState(DEFAULT_LENGTH)
    const [letters, setLetters] = useState(DEFAULT_LETTERS)
    const [numbers, setNumbers] = useState(DEFAULT_NUMBERS)
    const [specialChars, setSpecialChars] = useState(DEFAULT_SPECIAL_CHARS)

    useEffect(() => {
        const res = generateRandomString(
            length,
            numbers,
            letters,
            letters,
            specialChars
        )

        setGeneratedPassword(res)
    }, [length, letters, numbers, specialChars, regenerateCounter])

    return (
        <div>
            <form>
                <div className="my-2">
                    <label htmlFor="lengthInput" className="form-label">
                        Password length:
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="lengthInput"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        min={1}
                        max={128}
                    />
                </div>
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={letters}
                        onChange={(e) => setLetters(e.target.checked)}
                        id="lettersCheck"
                    />
                    <label className="form-check-label" htmlFor="lettersCheck">
                        Use letters
                    </label>
                </div>
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={numbers}
                        onChange={(e) => setNumbers(e.target.checked)}
                        id="numbersCheck"
                    />
                    <label className="form-check-label" htmlFor="numbersCheck">
                        Use numbers
                    </label>
                </div>
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={specialChars}
                        onChange={(e) => setSpecialChars(e.target.checked)}
                        id="specialCharsCheck"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="specialCharsCheck"
                    >
                        Use special characters
                    </label>
                </div>
            </form>
            <div className="my-3">
                <p className="fw-bold">Common generation pre-sets</p>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => {
                        setLength(DEFAULT_LENGTH)
                        setLetters(DEFAULT_LETTERS)
                        setNumbers(DEFAULT_NUMBERS)
                        setSpecialChars(DEFAULT_SPECIAL_CHARS)
                    }}
                >
                    Default
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => {
                        setLength(24)
                        setLetters(true)
                        setNumbers(true)
                        setSpecialChars(false)
                    }}
                >
                    24-char secret
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => {
                        setLength(32)
                        setLetters(true)
                        setNumbers(true)
                        setSpecialChars(false)
                    }}
                >
                    32-char secret
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => {
                        setLength(4)
                        setLetters(false)
                        setNumbers(true)
                        setSpecialChars(false)
                    }}
                >
                    4-digit PIN
                </button>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => {
                        setLength(6)
                        setLetters(false)
                        setNumbers(true)
                        setSpecialChars(false)
                    }}
                >
                    6-digit PIN
                </button>
            </div>
        </div>
    )
}

export default CommonPasswordInterface
