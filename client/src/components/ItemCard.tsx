import { useCartContext } from "../context/CartContext"
import space from "/assets/1.jpg"
export default function ItemCard(props: any) {
  const { increaseItemQuantity, cartItems } = useCartContext()
  return (<>
    <div className="p-4 relative shadow-xl w-5/6 flex flex-row gap-8 rounded-md border hover:border-black" >
      <div className="absolute top-[-0.8rem] text-sm left-[40%] text-center px-2 bg-yellow-400">{props.item.discount}% off</div>
      <div>
        <img src={props.item.imgUrl} className="w-[10rem] h-[10rem]" alt="" />
      </div>
      <div className="flex flex-col justify-between mr-4">
        <h1>{props.item.name}</h1>
        <p className="font-light">Serving : {props.item.serving}</p>
        <p className="bg-black px-1 font-light text-white inline-block whitespace-nowrap"> 
              <span><del className="inline">Rs.{(props.item.price + (props.item.price * props.item.discount / 100)).toFixed(0) }</del></span>  
              Rs.{props.item.price} 
        </p>
      </div>
      <div className="relative">
        <button className="absolute right-1 bottom-0 bg-amber-700 font-bold text-xl px-2 rounded-md" onClick={() => increaseItemQuantity(props.item.id)}>+</button>
      </div>
    </div>
    </>
  )
}
