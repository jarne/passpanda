/**
 * PassPanda | common password generator interface
 */

import { useState } from "react"

function CommonPasswordInterface() {
    const [length, setLength] = useState(12)
    const [letters, setLetters] = useState(true)
    const [numbers, setNumbers] = useState(true)
    const [specialChars, setSpecialChars] = useState(true)

    return (
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
                <label className="form-check-label" htmlFor="specialCharsCheck">
                    Use special characters
                </label>
            </div>
        </form>
    )
}

export default CommonPasswordInterface
