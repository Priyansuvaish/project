
const card_reducer = (state,action) => {
  
    if(action.type === "ADD_TO_CART"){
        let {product,value} =action.payload;
        // s
        let cardProduct;

        cardProduct = {
            id:product.id + value,
            name: product.name,
            price: product.price,
            image: product.url,
            delivery: product.delivery,
            size: value,
            amoumt: product.price,
            Quantity:1,
        };
        let newcart = [...state.cart,cardProduct]
        const unique = newcart.filter((elem, index) => newcart.findIndex(obj => obj.id === elem.id) === index);
        let v=0
        unique.map((c) => v=v+c.amoumt);
        let s=0
        unique.map((c) => s=s+c.delivery);
        return{
            ...state,
            cart:unique,
            total:v,
            shipping_fee:s,
        };
        
    }
    if(action.type === "REMOVE_ITEM"){
        let updatedCart = state.cart.filter((c)=> c.id !== action.payload);
        let v=0
        updatedCart.map((c) => v=v+c.amoumt);
        let s=0
        updatedCart.map((c) => s=s+c.delivery);
        return{
            ...state,
            cart: updatedCart,
            total:v,
            shipping_fee:s,
        };
    }
    if(action.type === "UPDATE"){
        let {value,id}=action.payload;
        let updatecart = state.cart.map((c) => {
            if(id === c.id){
                let a = c.price * value;
                let q = value
                return{
                    ...c,
                    amoumt: a,
                    Quantity: q,
                };
            } else{
                return c;
            }

        });
        let v=0;
        updatecart.map((c) => v=v+c.amoumt);
        let s=0
        updatecart.map((c) => s=s+c.delivery);
        return{
            ...state,
            cart: updatecart,
            total:v,
            shipping_fee:s,
        };
    }
    return state;
};
export default card_reducer;
