import "antd/dist/antd.css";
import React, { Component } from "react";
import "./BurgerStyle.css";
import Order from "../components/Order";
import axios from "axios";
import { useHistory as history } from "react-router-dom";
export default class Burger extends Component {
  constructor() {
    super();
    this.state = {
      bacon: 0,
      cheese: 0,
      meat: 0,
      price: 3,
      lettuce: 0,
      email: "",
      password: "",
      userid: 0,
    };
  }

  registerUser = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    const response = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  loginUser = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    const response = await fetch("http://localhost:5000/api/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log("user", data);

    if (data) {
      this.setState({
        userid: data.userlog._id,
      });
      this.setState({ lettuce: data.userlog.lettuce });
      this.setState({ meat: data.userlog.meat });
      this.setState({ bacon: data.userlog.bacon });
      this.setState({ cheese: data.userlog.cheese });
      this.setState({ price: data.userlog.price });
      alert("Login successfull");
    } else {
      alert("Please check your username and password");
    }

    console.log("I am data", data.userlog);
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  addRemoveIngredient = (action, ingredient) => {
    let { lettuce, bacon, cheese, meat, price } = this.state;
    let stateValue;

    switch (ingredient) {
      case "lettuce": {
        stateValue = lettuce;

        break;
      }
      case "bacon": {
        stateValue = bacon;

        break;
      }

      case "cheese": {
        stateValue = cheese;

        break;
      }
      case "meat": {
        stateValue = meat;

        break;
      }
      default:
        break;
    }

    if (action === "add") {
      stateValue = stateValue + 1;
      price = price + 0.5;
    } else {
      stateValue = stateValue - 1;
      if (price > 3) price = price - 0.5;
    }

    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0,
    });

    this.setState({
      price: price,
    });
  };

  burgerContent = () => {
    const { lettuce, bacon, cheese, meat, data } = this.state;
    const burger = [];

    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuceSide" />);
    }
    for (let i = 0; i < bacon; i++) {
      burger.push(<div key={burger.length} className="baconSide" />);
    }
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide" />);
    }
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meatSide" />);
    }

    return burger;
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        {/* {this.getIngredients} */}
        <h1>Register</h1>
        <form onSubmit={this.registerUser}>
          <br />
          <input
            value={email}
            onChange={this.onChange}
            type="email"
            id="email"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={this.onChange}
            type="password"
            id="password"
            placeholder="Password"
          />
          <br />

          <input type="submit" value="SUBMIT" />
          <br />
        </form>

        <form onSubmit={this.loginUser}>
          <input type="submit" value="SIGNIN" />
        </form>

        {/* <NavBar/> */}
        <div className="burgerIngredients">
          <div className="topSide" />
          {this.burgerContent()}
          <div className="bottomSide" />
        </div>
        <div className="ingredientsBlock">
          <p>
            Price: <strong>{this.state.price.toFixed(2)}</strong>
          </p>

          <p>Lettuce</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngredient("add", "lettuce")}
              className="ingrBtns"
            >
              More
            </button>
            <button
              onClick={
                this.state.lettuce > 0
                  ? () => this.addRemoveIngredient("remove", "lettuce")
                  : undefined
              }
              className="ingrBtns"
            >
              Less
            </button>
          </div>
          <p>bacon</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngredient("add", "bacon")}
              className="ingrBtns"
            >
              More
            </button>
            <button
              onClick={
                this.state.bacon > 0
                  ? () => this.addRemoveIngredient("remove", "bacon")
                  : undefined
              }
              className="ingrBtns"
            >
              Less
            </button>
          </div>
          <p>cheese</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngredient("add", "cheese")}
              className="ingrBtns"
            >
              More
            </button>
            <button
              onClick={
                this.state.cheese > 0
                  ? () => this.addRemoveIngredient("remove", "cheese")
                  : undefined
              }
              className="ingrBtns"
            >
              Less
            </button>
          </div>
          <p>meat</p>
          <div className="ingrBtns">
            <button
              onClick={() => this.addRemoveIngredient("add", "meat")}
              className="ingrBtns"
            >
              More
            </button>
            <button
              onClick={
                this.state.meat > 0
                  ? () => this.addRemoveIngredient("remove", "meat")
                  : undefined
              }
              className="ingrBtns"
            >
              Less
            </button>
          </div>
          <div>
            <Order v={this.state} />
          </div>
        </div>
        <div />
      </div>
    );
  }
}
