/**
 * PassPanda | Diceware generator interface
 */

import { useState, useEffect } from "react"

import { generatePassphrase } from "./logic/diceGenerator"

function DicewareInterface({ setGeneratedPassword, regenerateCounter }) {
    const [wordCount, setWordCount] = useState(4)

    useEffect(() => {
        const res = generatePassphrase(wordCount)

        setGeneratedPassword(res)
    }, [wordCount, regenerateCounter])

    return (
        <form>
            <label htmlFor="wordCountInput" className="form-label">
                Word count:{" "}
                <span className="badge text-bg-primary p-2">{wordCount}</span>
            </label>
            <input
                type="range"
                className="form-range"
                id="wordCountInput"
                value={wordCount}
                onChange={(e) => setWordCount(e.target.value)}
                min={3}
                max={8}
            />
        </form>
    )
}

export default DicewareInterface
