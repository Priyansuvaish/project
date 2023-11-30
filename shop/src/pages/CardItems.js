import React from 'react'
import { useCartContext } from './card_context';


export const CardItems = (props) => {
    const { deleteitem, updateCart  } = useCartContext();
    const options=[
        {value:1},
        {value:2},
        {value:3},
        {value:4},
        {value:5},
    ]
    function handleSelect(event){
        updateCart(event.target.value,props.id)
    }
    
  return (
    <> 
        {/* <div className="row">
                .cart-image--name
                <div className="col-2 cart-hide">Price</div>
                <div className="col-1">Quantity</div>
                <div className="col-2 cart-hide">Subtotal</div>
                <div className="col-1">Remove</div>
        </div> */}
        <div className="container my-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col-auto d-none d-lg-block">
                    <img src={props.image} alt=""/>
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                    <p>{props.id}</p>
                    <button type="button" className="btn-close" aria-label="Close" style={{'margin-left': 'auto'}} onClick={()=>deleteitem(props.id)}></button>
                    <strong className="d-inline-block mb-2 text-primary-emphasis">{props.name}</strong>
                    <h3 className="mb-0">₹{props.price} <br/>+₹{props.delivery}(Delivery charges)</h3>
                    <p>Delivery by Monday 6 Sep</p>
                    <p>Size: {props.size}</p>
                    <select className="form-select" aria-label="Default select example" style={{width: '4rem'}}  value={props.Quantity} onChange={handleSelect}>
                        {
                            options.map(o =>(
                                <option value={o.value}>{o.value}</option>
                            ))
                        }
                    </select>
                    <h4 style={{'text-align': 'right'}}>₹{props.amoumt}</h4>
                </div>
            </div>
        </div>
    </>
  )
}
