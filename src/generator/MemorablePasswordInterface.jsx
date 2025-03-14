/**
 * PassPanda | memorable password generator interface
 */

import { useState, useEffect } from "react"
import generatePassword from "omgopass"

function MemorablePasswordInterface({
    setGeneratedPassword,
    regenerateCounter,
}) {
    const DEFAULT_SYLLABLES_COUNT = 3
    const DEFAULT_NUMBERS = true
    const DEFAULT_TITLECASED = true

    const [syllablesCount, setSyllablesCount] = useState(
        DEFAULT_SYLLABLES_COUNT
    )
    const [numbers, setNumbers] = useState(DEFAULT_NUMBERS)
    const [titlecased, setTitlecased] = useState(DEFAULT_TITLECASED)

    useEffect(() => {
        const res = generatePassword({
            syllablesCount,
            hasNumbers: numbers,
            titlecased,
        })

        setGeneratedPassword(res)
    }, [syllablesCount, numbers, titlecased])

    return (
        <div>
            <form>
                <div className="my-2">
                    <label htmlFor="syllablesInput" className="form-label">
                        Number of syllables (length):
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="syllablesInput"
                        value={syllablesCount}
                        onChange={(e) => setSyllablesCount(e.target.value)}
                        min={1}
                        max={32}
                    />
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
                        checked={titlecased}
                        onChange={(e) => setTitlecased(e.target.checked)}
                        id="titlecasedCheck"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="titlecasedCheck"
                    >
                        Use titlecase
                    </label>
                </div>
            </form>
            {/* <div className="my-3">
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
            </div> */}
        </div>
    )
}

export default MemorablePasswordInterface
