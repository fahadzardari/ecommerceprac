import { useEffect, useState, Component, ChangeEvent } from "react"

const images = [
        "/assets/1.jpg",
        "/assets/2.jpg",
        "/assets/3.jpg",
        "/assets/4.jpg",


]


export default function ImageSlider() {
        const circleClicked = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                setImageIndex(event.target.id)
                for (let i: number = 0; i < images.length; i++) {
                        let el = document.getElementById(i.toString())
                        if (i == event.target.id) {
                                el.innerHTML = "&#x25CF";
                        } else { 
                                el.innerHTML = "&#x25CB"; 
                        }
                }
                //  document.getElementById(event.target.id).innerHTML = "&#x25CF;"


        }


        const [imageIndex, setImageIndex] = useState(0)
        return (<div className="relative w-full h-full">
                <img src={images[imageIndex]} alt="sdf" className="h-full w-full transition-all " /><br />
                <div className="absolute bottom-0 w-full text-center text-white text-2xl ">
                        <span id="0" className="cursor-pointer" onClick={circleClicked}>
                                &#x25CB;
                        </span>
                        <span id="1" className="cursor-pointer" onClick={circleClicked}>
                                &#x25CF;
                        </span>


                </div>

        </div>

        )
}