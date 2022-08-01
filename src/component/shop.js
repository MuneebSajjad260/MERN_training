import React from "react";
import { useDispatch } from "react-redux";
import { depositmoney } from "../redux/action-creators";
import { withdrawmoney } from "../redux/action-creators";
const Shop = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>hello world</h1>
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(withdrawmoney(100))}}>-</button>
      select
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(depositmoney(100))}}>+</button>
    </div>
  );
};
export default Shop;
