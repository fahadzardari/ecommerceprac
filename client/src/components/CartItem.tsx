import React from 'react'
import { useCartContext } from '../context/CartContext'
import items from '../items.json'
export default function CartItem({ cartItem }) {
        const { increaseItemQuantity, cartItems, decreaseItemQuantity } = useCartContext();
        return (<>
                {
                        items.map((item) => {
                                if (item.id == cartItem.id) {
                                        return <>
                                                <div>

                                                        <div className="flex  flex-row justify-between">
                                                                <div className="font-bold">
                                                                        {item.name}
                                                                </div>
                                                                <div>
                                                                        {item.price * cartItem.quantity}
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <button className='px-1  border border-black rounded-md' onClick={() => { decreaseItemQuantity(cartItem.id) }}>-</button>
                                                                <span>{cartItem.quantity}</span>
                                                                <button className='px-1  border border-black rounded-md' onClick={() => { increaseItemQuantity(cartItem.id) }}>+</button>
                                                        </div>
                                                        <hr />
                                                </div>
                                        </>
                                }
                            })
                        }
                        </>
        )
}
