import React from "react";
import { connect } from "react-redux";
import { counterPlus } from "../../Actions/CounterActions"; //коли просто export то ми дістаємо через {} дужки
import { counterMinus } from "../../Actions/CounterActions"; 

// const Counter = (props) => {
//     console.log("default props ", props);
const Counter = ( {counter, counterPlus, counterMinus} ) => {
    return (
        <div className="qty mt-5">
            <span className="minus bg-dark" onClick={counterMinus}>-</span>
            <input type="number" className="count" name="qty" value={counter} />
            <span className="plus bg-dark" onClick={counterPlus} >+</span>
        </div>
    )
}

// const mapStateToProps = (props) => {
//     console.log("mapStateToProps", props)
// }

const mapStateToProps = ({ CounterReducer }) => {
    console.log("mapStateToProps ", CounterReducer)
    const { counter } = CounterReducer;
    return { counter };
}
// ф-ція для підключення action
const mapDispatchToProps = {
    counterPlus,
    counterMinus
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter); // підключення глобального store
