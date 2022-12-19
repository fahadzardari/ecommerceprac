import Category from "./Category"
import { useCartContext } from '../context/CartContext'
function ItemsLayout() {
        const { cartItems } = useCartContext()
        
        return (
                <>
                        <div className=" lg:w-[70%]  ">
                                
                                <Category category="Spices" />
                                <Category category="Dessert" />
                                <Category category="Rice" />



                        </div>
                </>
        )
}

export default ItemsLayout