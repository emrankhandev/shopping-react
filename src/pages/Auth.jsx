import { useState } from "react"

export const Auth = () => {
    const [mode, setMode] = useState("sign")
    return (
        <div>
            <h2>{mode === "signup" ? "Sign up" : "Login"}</h2>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" />

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" />

                <button type="submit">{mode === "signup" ? "Sign up" : "Login"}</button>

                {mode === "signup" ?
                    <p>Already have an account? <span>Login</span></p>
                    :

                    <p>Don't have an account? <span>Signup</span></p>
                }
            </form>
        </div>
    )
}