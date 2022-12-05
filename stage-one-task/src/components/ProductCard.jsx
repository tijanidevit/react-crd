/**
 * ProductCard Component
 * Represent A Single Product Card
 * It includes the product image, name, price, like and cart buttons
 */

import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductCard = ({ data }) => {
  return (
    <div className="col-md-4 mb-2 product-card">
      <a href={data.id}>
        <div>
          <img
            className="img-responsive product-image"
            src={data.image}
            alt={data.name}
          />
        </div>

        <div className="my-2">
          <div className="d-flex justify-content-between">
            <p className="product-name">{data.name}</p>
            <p className="">
              <FontAwesomeIcon icon={faCartShopping} />
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="product-price text-muted">{data.price}</p>
            <p className="">
              <FontAwesomeIcon icon={faHeart} />
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
