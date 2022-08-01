import React, { useState } from "react";
import "./BurgerStyle.css";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";

import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const Order = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ingr = {
    lettuce: props.v.lettuce,
    meat: props.v.meat,
    bacon: props.v.bacon,
    cheese: props.v.cheese,
  };

  const history = useHistory();
  const showModal = () => {
    setIsModalVisible(true);
    console.log(props);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  async function ingredients(event) {
    event.preventDefault();

    console.log("I am Your User");
    axios
      .put("http://localhost:5000/api/user/ingredients", {
        lettuce: props.v.lettuce,
        meat: props.v.meat,
        bacon: props.v.bacon,
        cheese: props.v.cheese,
        userid: props.v.userid,
        price:props.v.price.toFixed(2)
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("id", props.v.userid);

    // console.log("in check out --- ", event);
    if (props.v.userid) {
      history.push({ pathname: "/checkout", state: { ingr } });
      // history.push({ pathname: "/", state: { ingr } });
    } else {
      alert("Please Login !!!");
    }
    console.log("ingredients are ", props.v);
  }

  return (
    <>
      <Button
        type="primary"
        id="userid"
        onClick={props.v.price > 3 ? showModal : undefined}
      >
        Order Now
      </Button>

      <Modal
        title="Order Summary"
        visible={isModalVisible}
        // onOk={handleOk}
        // onCancel={handleCancel}
      >
        <p>Lettuce {props.v.lettuce}</p>
        <p>Meat {props.v.meat}</p>
        <p>Bacon {props.v.bacon}</p>
        <p>Cheese {props.v.cheese}</p>
        <p>
          <strong>Price:{props.v.price.toFixed(2)}</strong>
        </p>
        <p>Do you want to continue</p>

        <Link
          className="btn1"
          type="button"
          to="/checkout"
          // state="test param"
          onClick={ingredients}
        >
          continue
        </Link>

        <Link onClick={handleCancel} to="/">
          Cancel
        </Link>
      </Modal>
    </>
  );
};

export default Order;
