import { createContext, ReactNode, useContext, useState } from "react";

type CartProviderProps = {
        children: ReactNode
}

type CartItem = {
        id: number
        quantity: number
}


type CartContext = {
        cartItems: CartItem[]
        getItemQuantity: (id: number) => number
        increaseItemQuantity: (id: number) => void
        decreaseItemQuantity: (id: number) => void

}

const CartContext = createContext({} as CartContext)


export function useCartContext() {
        return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
        const [cartItems, setCartItems] = useState<CartItem[]>([])
        const getItemQuantity = (id: number) => {
                return cartItems.find((item) => item.id === id)?.quantity || -1
        }
        function increaseItemQuantity(id: number) {
                setCartItems(currItems => {
                        if (currItems.find(item => item.id === id) == null) {
                                return [...currItems, { id, quantity: 1 }]
                        } else {
                                return currItems.map(item => {
                                        if (item.id === id) {
                                                return { ...item, quantity: item.quantity + 1 }
                                        } else {
                                                return item
                                        }
                                })
                        }
                })

        }
        function decreaseItemQuantity(id: number){
                setCartItems(currItems => {

                                return currItems.map(item => {
                                        if (item.id === id) {
                                                if(item.quantity > 1){
                                                        return { ...item, quantity: item.quantity - 1 }
                                                }else{
                                                        return currItems.filter((item) => {if(item.id != id) return item})
                                                }
                                        } else {
                                                return item
                                        }
                                })
                        
                })
        }





        return (
                <CartContext.Provider value={{
                        cartItems,
                        getItemQuantity,
                        increaseItemQuantity,
                        decreaseItemQuantity

                }}>
                        {children}
                </CartContext.Provider>
        )
}




