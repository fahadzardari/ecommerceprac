import ImageSlider from "./ImageSlider";


export default function Header() {
        return <div className="justify-center">
                <div className="flex justify-center p-4">
                        <div className="info flex flex-row lg:justify-between mx-4 w-3/4 ">
                                <div>
                                        <button className="bg-yellow-400 px-2 py-1 rounded-md">M</button>
                                </div>
                                <div>
                                        <button className="bg-yellow-400 px-2 mx-2 py-1 rounded-md">Location</button>
                                        <button className="bg-yellow-400 px-2 mx-2 py-1 rounded-md">(021) 213214</button>
                                </div>
                        </div>
                </div>
                <div className="relative h-[60vh] lg:h-[85vh] ">
                        
                        <ImageSlider/>
                </div>
        </div>
}