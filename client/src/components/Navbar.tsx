import Hamburger from './assets/hamburger.png'
export default function Navbar() {
        return <div className="m-0 flex flex-row items-center w-full bg-gray-100 lg:text-[1.1rem] sticky top-0"  >
                <div className="search-bar-selector ml-2 ">
                        <a href="https://search"><img src={Hamburger} className=""  alt="s" /></a>
                </div>
                <div className="flex flex-row items-center  overflow-x-scroll scrollbar p-0">
                        <div className="mx-2 cursor-pointer lg:p-2 border-t-2 border-gray-100 hover:border-black">
                                <a href="#">Hello</a>
                        </div>
                        <div className="mx-2 cursor-pointer lg:p-2 border-t-2 border-gray-100 hover:border-black">
                                <a href="#">Quorma</a>
                        </div>
                        <div className="mx-2 cursor-pointer lg:p-2 border-t-2 border-gray-100 hover:border-black">
                                <a href="#">karahi</a>
                        </div>
                        <div className="mx-2 cursor-pointer lg:p-2 border-t-2 border-gray-100 hover:border-black">
                                <a href="#">Biryani</a>
                        </div>
                        <div className="mx-2 cursor-pointer lg:p-2 border-t-2 border-gray-100 hover:border-black">
                                <a href="#">Some Drink</a>
                        </div>
                        <div className="mx-2 cursor-pointer lg:p-2 border-t-2 border-gray-100 hover:border-black">
                                <a href="#">Some Drink</a>
                        </div>
                      
                </div>
        </div>
}