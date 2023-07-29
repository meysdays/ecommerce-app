const Product = ({ produce }) => {
  return (
    <div>
      <div className="card" key={produce.id}>
        <img
          src={produce.imageURL}
          alt={produce.name}
          style={{ width: '100%' }}
        />

        <div>
          <h1>{produce.name}</h1>
          <p className="price">${produce.price}</p>
          <p>{produce.description}</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Product
