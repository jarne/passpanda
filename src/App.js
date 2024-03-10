/**
 * PassPanda | app main component
 */

import { useState } from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard, faRotate } from "@fortawesome/free-solid-svg-icons"

import DicewareInterface from "./generator/DicewareInterface"
import CommonPasswordInterface from "./generator/CommonPasswordInterface"

import "./custom.scss"
import "./App.css"
import logo from "./logo.png"

function App() {
    const [generatedPassword, setGeneratedPassword] = useState("")
    const [regenerateCounter, setRegenerateCounter] = useState(0)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(generatedPassword)
        } catch (e) {
            alert("Couldn't copy generated password to clipboard!")
        }
    }

    const regenerate = () => {
        setRegenerateCounter(regenerateCounter + 1)
    }

    return (
        <div className="container mt-4">
            <div className="d-flex align-items-center">
                <img
                    src={logo}
                    alt="PassPanda app logo"
                    className="app-logo rounded-3"
                />
                <h1 className="fw-semibold ms-3">PassPanda</h1>
            </div>
            <div className="password-result d-flex align-items-center bg-body-secondary rounded-2 mt-4 mb-4">
                <span className="password-result-text font-monospace fs-4 flex-grow-1">
                    {generatedPassword}
                </span>
                <button
                    className="btn btn-primary mx-2"
                    onClick={copyToClipboard}
                >
                    <FontAwesomeIcon icon={faClipboard} />
                </button>
                <button className="btn btn-primary mx-2" onClick={regenerate}>
                    <FontAwesomeIcon icon={faRotate} />
                </button>
            </div>
            <BrowserRouter>
                <ul className="nav nav-underline mb-4">
                    <li className="nav-item">
                        <NavLink
                            to="/password"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Random password
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/diceware"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Diceware
                        </NavLink>
                    </li>
                </ul>
                <div className="generator-options">
                    <Routes>
                        <Route
                            path="/password"
                            element={
                                <CommonPasswordInterface
                                    setGeneratedPassword={setGeneratedPassword}
                                    regenerateCounter={regenerateCounter}
                                />
                            }
                        />
                        <Route
                            path="/diceware"
                            element={
                                <DicewareInterface
                                    setGeneratedPassword={setGeneratedPassword}
                                    egenerateCounter={regenerateCounter}
                                />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
            <div className="mt-4">
                <p className="text-end">
                    <b>PassPanda</b> is{" "}
                    <a
                        href="https://github.com/jarne/passpanda"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        open source
                    </a>
                </p>
            </div>
        </div>
    )
}

export default App
