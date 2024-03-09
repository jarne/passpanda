/**
 * PassPanda | Diceware generator interface
 */

import { useState } from "react"

function DicewareInterface() {
    const [wordCount, setWordCount] = useState(4)

    return (
        <form>
            <label htmlFor="wordCountInput" className="form-label">
                Word count:{" "}
                <span className="badge text-bg-primary">{wordCount}</span>
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
