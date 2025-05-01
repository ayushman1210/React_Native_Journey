const product={
    name:"laptop",
    price:"1200",
    availability:"in stock"
}

const Product=()=>{
    return <div><h1>{product.name}</h1>
    <h1>{product.price}</h1>
    <h1>{product.availability}</h1>
    </div>
}

export default Product;