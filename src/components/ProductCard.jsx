import {Link} from "react-router-dom"

export const ProductCard = ({product}) => {
    return (
        <div key={product.id}>
            <img src={product.image} alt={product.productName} width="200px" />
            <h2>{product.productName}</h2>
            <h3>${product.price}</h3>
            <Link>View Details</Link>
            <button>Add to cart</button>
            <hr />
        </div>
    )
}