import { useForm } from "react-hook-form"
import { useState } from "react"
export const Auth = () => {
    const [mode, setMode] = useState("sign")
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h2>{mode === "signup" ? "Sign up" : "Login"}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email"
                    {...register("email", { required: "Email is required" })}
                />

                <label htmlFor="password">Password: </label>
                <input type="password" id="password"
                    {...register("password", {
                        required: "Password is required", minLength: {
                            value: 5,
                            message: "Password must be at least 5 characters"
                        },
                        maxLength: {
                            value: 12,
                            message: "Password must be lest than 12 characters"
                        }
                    })}
                />

                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit">{mode === "signup" ? "Sign up" : "Login"}</button>

                {mode === "signup" ?
                    <p>Already have an account? <span onClick={() => setMode("login")}>Login</span></p>
                    :

                    <p>Don't have an account? <span onClick={() => setMode("signup")}>Signup</span></p>
                }
            </form>
        </div>
    )
}