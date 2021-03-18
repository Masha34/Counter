import React from "react";
import { connect } from "react-redux";
import { counterPlus } from "../../Actions/CounterActions"; //коли просто export то ми дістаємо через {} дужки
import { counterMinus } from "../../Actions/CounterActions"; 
import { counterPlusTwo } from "../../Actions/CounterActions"; 
import { counterMinusTwo } from "../../Actions/CounterActions"; 
import { counterMultiplyByTwo } from "../../Actions/CounterActions"; 
import { counterReset } from "../../Actions/CounterActions"; 

// const Counter = (props) => {
//     console.log("default props ", props);
const Counter = ( {counter, counterPlus, counterMinus, counterPlusTwo, counterMinusTwo, counterMultiplyByTwo, counterReset} ) => {
    return (
        <div className="qty mt-5">
            <span className="minus bg-dark" onClick={counterMinus}>-</span>
            <input type="number" className="count" name="qty" value={counter} />
            <span className="plus bg-dark" onClick={counterPlus} >+</span>
            <span className="plus bg-dark" onClick={counterPlusTwo} >+2</span>
            <span className="plus bg-dark" onClick={counterMinusTwo} >-2</span>
            <span className="plus bg-dark" onClick={counterMultiplyByTwo} >*2</span>
            <span className="plus bg-dark" onClick={counterReset} >0</span>
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
    counterMinus,
    counterPlusTwo,
    counterMinusTwo,
    counterMultiplyByTwo,
    counterReset
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter); // підключення глобального store
