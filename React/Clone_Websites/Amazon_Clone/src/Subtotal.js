import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
// import { calculateSum } from "./calculateSum";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory(); // remember browser activity
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  // const sumPrice = calculateSum(basket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Homework to increase the item and show */}
              Subtotal (<span>{basket.length}</span> items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox"></input>
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>

      {/* Using history push is another way to trigger Link when Clicked */}
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
