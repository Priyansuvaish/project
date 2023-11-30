import React from "react";
import { useCartContext } from "./card_context";
import { CardItems } from "./CardItems";


export const Cart = () => {
  const { cart,total,shipping_fee } = useCartContext();
  console.log("file: cartReducer.js ~ line 4 ~ cartReducer ~ product", cart);
  return (
    <>
        
      {/* <>
        <div className = "container text-center">
            <div className="row">
                <div className="col-6">Item</div>
                <div className="col-2 cart-hide">Price</div>
                <div className="col-1">Quantity</div>
                <div className="col-2 cart-hide">Subtotal</div>
                <div className="col-1">Remove</div>
            </div>
            <hr />
            
        </div>
      </> */}
      
              <div className="class-items">
                {cart.map((e) => {
                return <CardItems key={e.id} {...e} />;
                })}
              </div>

      <div className="container text-left">
        <div className="row">
          <div className="col-7"></div>
          <div className="col-5">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">Sub Total:</th>
                  <td>₹{total}</td>
                </tr>
                <tr>
                  <th scope="row">Delivery Charges:</th>
                  <td>₹{shipping_fee}</td>
                </tr>
                <tr>
                  <th scope="row">Total:</th>
                  <td>₹{total+shipping_fee}</td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "100%" }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
