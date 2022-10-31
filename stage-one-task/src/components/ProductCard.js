const ProductCard = ({ data }) => {
  return (
    <div className="col-md-4 product-card">
      <div>
        <img
          className="image-fluid product-image"
          src={data.image}
          alt="product pic"
        />
      </div>

      <div className="my-2">
        <div className="d-flex justify-content-between">
          <p className="product-name">{data.name}</p>
          <p className="">cart</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="product-price text-muted">{data.price}</p>
          <p className="">like</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
