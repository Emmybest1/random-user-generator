import React from "react";

import "./card.style.scss";
const Card = () => {
  return (
    <div className="container container-flex">
      <div className="card">
        <div className="card__info">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/dp.jpg`}
            alt=""
            className="card__img"
          />
          <div className="card__main">
            <h2 className="card__heading">Emmanuel Onah Jerry Male 26 years old</h2>

            <p>Email : emmajerry@gmail.com</p>
            <p>Phone : +37256105050</p>
          </div>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum vero iusto
          consequuntur ex neque. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default Card;
