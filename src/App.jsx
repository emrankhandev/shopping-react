import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Auth } from "./pages/Auth"
import { Checkout } from "./pages/Checkout"
import { Navbar } from "./components/Navbar"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}