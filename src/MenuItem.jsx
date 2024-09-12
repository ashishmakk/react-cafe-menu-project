import React from "react";

function MenuItem({ id, image, title, category, price, description }) {
  return (
    <article className='menu-item'>
      <img src={image} alt={title} />
      <div className='menu-item-content'>
        <h5>{title}</h5>
        <h6>{`$${price}`}</h6>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default MenuItem;
