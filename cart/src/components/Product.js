import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge text-bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">
            -
          </button>
          <button type="button" class="btn btn-outline-primary">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-outline-primary" onClick={}>
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.quantity*props.product.price}
      </div>
    </div>
  );
}
