import { Link } from "react-router-dom"
import { getProducts } from "../data/products"
import { ProductCard } from "../components/ProductCard"

export const Home = () => {
    const products = getProducts()
    return (
        <div>
            <h1>Welcome to easy-shopping</h1>
            <p>Discover amazing products at great prices.</p>
            <h2>Our Products: </h2>
            <div>
                {products.map((product) => {
                    return (
                        <ProductCard product={product} />
                    )

                })}
            </div>
        </div>
    )
}