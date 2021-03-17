import React from "react";


const Counter = () => {
    return (
        <div className="qty mt-5">
            <span className="minus bg-dark">-</span>
            <input type="number" className="count" name="qty" value="1" />
            <span className="plus bg-dark"  >+</span>
        </div>
    )
}

export default Counter;
