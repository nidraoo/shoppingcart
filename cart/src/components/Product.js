import React from "react";

export default function Product(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h2>
          {props.product.name}
          <span class="badge text-bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-4">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">
            -
          </button>
          <button type="button" class="btn btn-outline-primary">
            Quantity
          </button>
          <button type="button" class="btn btn-outline-primary">
            +
          </button>
        </div>
        Checkb
      </div>
    </div>
  );
}
