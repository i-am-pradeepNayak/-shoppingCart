
import CartItem from "../CartItem/CartItem";

//styles
import { Wrapper } from "./Cart.styles";

//Types
import { CartItemType } from "../App";


//Props

type Props={
    cartItems:CartItemType[];
    addToCart:(clickedItem:CartItemType)=>void;
    removeFromCart:(id:number)=>void;
} 

const Cart:React.FC<Props> = ({cartItems,addToCart,removeFromCart}) => {

    const TotalAmount=(items:CartItemType[])=> 
    items.reduce((ack:number,item) =>ack+item.amount *item.price,0);
    return (
        <Wrapper>
            <h2>your shopping</h2>
            {cartItems.length===0 ? <p>Cart is empty</p> : null}
            {cartItems.map(item=>(
                <CartItem key={item.id} 
                item={item}  
                addToCart={addToCart} 
                removeFromCart={removeFromCart}/>
            ))}
            <h2>{TotalAmount(cartItems)}</h2>
            
        </Wrapper>
    )
}

export default Cart

