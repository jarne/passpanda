/**
 * PassPanda | app main component
 */

import { useState } from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import DicewareInterface from "./generator/DicewareInterface"
import CommonPasswordInterface from "./generator/CommonPasswordInterface"

import "./custom.scss"
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import "./App.css"
import logo from "./logo.png"

function App() {
    const [generatedPassword, setGeneratedPassword] = useState("")

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
                <span className="font-monospace fs-4 flex-grow-1">
                    {generatedPassword}
                </span>
                <button className="btn btn-outline-primary">
                    <i class="bi bi-clipboard"></i>
                </button>
                <button className="btn btn-outline-primary ms-2">
                    <i class="bi bi-arrow-counterclockwise"></i>
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
                            element={<CommonPasswordInterface />}
                        />
                        <Route
                            path="/diceware"
                            element={<DicewareInterface />}
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
