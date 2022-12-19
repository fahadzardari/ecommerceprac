import Cart from './components/Cart'
import Header from './components/Header'
import ItemsLayout from './components/ItemsLayout'
import Navbar from './components/Navbar'
import './index.css'
import {CartProvider} from './context/CartContext'
import CartItem from './components/CartItem'
export default function App(){
        return <>
                <Header/>
                <Navbar />
                <CartProvider>
                <div className="flex flex-col w-full justify-between lg:flex-row">
                
                        <ItemsLayout  />
                        <Cart />
                </div>
                </CartProvider>
                        

        </>
}