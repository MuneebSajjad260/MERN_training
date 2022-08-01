import React from "react";
import "./BurgerStyle.css";

import { Link, useLocation } from "react-router-dom";

const Checkout = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log("states=>", state);
  const burgerContent = () => {
    const burger = [];

    for (let i = 0; i < state.ingr.lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuceSide" />);
    }
    for (let i = 0; i < state.ingr.bacon; i++) {
      burger.push(<div key={burger.length} className="baconSide" />);
    }
    for (let i = 0; i < state.ingr.cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide" />);
    }
    for (let i = 0; i < state.ingr.meat; i++) {
      burger.push(<div key={burger.length} className="meatSide" />);
    }

    return burger;
  };

  return (
    <div>
      <h1>We hope it tastes well !!!</h1>

      {state && (
        <div>
          <div className="topSide" />
          {burgerContent()}
          <div className="bottomSide" />
        </div>
      )}

      <Link className="btn1" type="button" to="/">
        Cancel
      </Link>
      {/* <Link type="button">
        Continue
      </Link> */}
    </div>
  );
};

export default Checkout;
