import ItemCard from "./ItemCard"
import items from "../items.json"

function Category(props:any) {
  return (
    <div >
        <h1 className="text-center">Sample Category</h1>
        <div className="items grid place-items-center gap-y-8 grid-cols-1 md:grid-cols-2 m-4">
          {
            items.map((i) => {
              if(props.category == i.category)
                    return <ItemCard item = {i}  />

            })
          }
         
        </div>
    </div>
  )
}

export default Category