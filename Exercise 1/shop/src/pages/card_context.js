
import { useContext, useReducer ,createContext, useEffect } from "react";
import  reducer  from "./card_reducer";

const CartContext = createContext();

const getLocalCartData = ()=> {
    let localCartData = localStorage.getItem("thapaCart");
    if (localCartData.length === 0 ) {
        return [];
    } 
    else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    cart:getLocalCartData(),
    shipping_fee: 0,
    total:0
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,initialState);

    const addToCart = (product,value) => {
        dispatch({type:"ADD_TO_CART",payload:{product,value}})
    };

    const deleteitem = (id)=>{
        dispatch({type : "REMOVE_ITEM",payload:id})
    };

    useEffect(() => {
        localStorage.setItem("thapaCart",JSON.stringify(state.cart))
    },[state.cart]);

    const updateCart = (value,id)=>{
        dispatch({type:"UPDATE",payload: {value,id}})

    };

    return ( 
    <CartContext. Provider value={{...state,addToCart,deleteitem,updateCart}}> 
    {children}
    </CartContext.Provider>
    );
};
const useCartContext = () => {
    return useContext(CartContext);
}
export { CartProvider,useCartContext };