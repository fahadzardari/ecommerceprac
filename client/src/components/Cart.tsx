import CartItem from "./CartItem";
import {useCartContext}  from "../context/CartContext"
import items from '../items.json'
export default function Cart() {
  const {cartItems} = useCartContext()
  return (
    <div className=" lg:w-[25%] invisible lg:visible shadow-2xl px-2 py-3">
      <h1 className="text-[2rem] font-bold">Cart</h1>
      <div className="">

        {
        
        cartItems.map((item) => {
            return <CartItem cartItem={item}  /> 
        })
        }

      </div>

      <div>
        <div className="flex flex-row text-[0.95rem] text-gray-500 justify-between">
            <div>Sub Total</div>
            <div>code not written yet</div>
        </div>
        <div className="flex flex-row text-[1.05rem] font-bold justify-between">
            <div >Total</div>
            <div >Rs.1100</div>
        </div>
      </div>

      <div>
        <button>Checkout</button>
      </div>

    </div>
  )
}

