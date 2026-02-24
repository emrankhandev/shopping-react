import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Easy-shopping</Link>
            <Link to="/">Home</Link>
            <div>
                <Link to="/auth">Login</Link>
                <Link to="/auth">Signup</Link>
                <Link to="/checkout">Cart</Link>
            </div>
        </nav>
    )
}