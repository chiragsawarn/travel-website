import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/img-9.jpg"
              text="Explore the hidden waterfall deep inside Amazon"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="/images/img-2.jpg"
              text="Travel through the islands of Bali on a private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/img-3.jpg"
              text="Set sail in the Atlantic Ocean visiting uncharted waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="/images/img-4.jpg"
              text="Experience football on top of Himalayan Mountains"
              label="Sport"
              path="/services"
            />
            <CardItem
              src="/images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
