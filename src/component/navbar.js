import React from "react";
import { useSelector } from "react-redux";
const Navbar=()=>{
const amount = useSelector(state => state.amount)
    return(

        <div>
            <button className="btn btn-primary"> total amount :{amount}
            </button>
        </div>

    )
}
export default Navbar