import React from "react";

import "./card.style.scss";
const Card = ({ contacts }) => {
    return (
        <div className="container container-flex">
            {contacts.map((contact, index) => (
                <div className="card" key={index.toString()}>
                    <div className="card__info">
                        <img src={contact.picture.large} alt="" className="card__img" />
                        <div className="card__main">
                            <h2 className="card__heading">
                                {`${contact.name.title} ${contact.name.first} ${contact.name.last}`}
                                {""}
                                {contact.gender} {contact.dob.age} years old
                            </h2>

                            <p>Email :{contact.email}</p>
                            <p>Phone : {contact.phone}</p>
                        </div>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                        laborum vero iusto consequuntur ex neque. Lorem ipsum dolor sit amet. Lorem
                        ipsum dolor sit amet.
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Card;
