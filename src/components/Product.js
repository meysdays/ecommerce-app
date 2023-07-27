const Product = ({ produce }) => {
  return (
    <div>
      <div className="card" key={produce.id}>
        <img src={produce.name} alt={produce.name} />
        <h1>{produce.name}</h1>
        <p className="price">${produce.price}</p>
        <p>{produce.description}</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  )
}
export default Product
