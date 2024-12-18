import { useEffect, useState } from "react";
import '../css/test.css'


export default function Fakestore() {

    interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
    }

    interface LightBoxProp{
        image_:string
    }

    const [products, setproduct] = useState<Product[]>([]);


    const [image, setImageUrl] =  useState("");

    const [close, setclose] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/").then(res => res.json()).then(data => setproduct(data)).catch(err => console.log(err))
    }, []);

    function clickme(image:string) {
        setImageUrl(image);
    }

    function lightboxshow(image:string) {
        setImageUrl(image);
         setclose(true);
    }
    function handleclose(){
         setclose(false)
    }
    return (
        <>
            <nav className="flex justify-end m-5 pr-5">

                {/* 
        <input  className=" search border rounded border-blue-300 focus:outline-none focus:ring focus:ring-blue-500 text-center" type="text" placeholder="Search by category" /> */}
                <select className="w-40 border h-10 text-center cursor-pointer" name="category" id="category" onChange={(change) => console.log(change.target.value)}>
                    <option value="category">Category</option>
                    <option value="women's clothing">wemen's clothing</option>
                    <option value="men's clothing">men's clothing</option>
                </select>

            </nav>

            <div>
                <LightBox image_={image} />
            </div>

            <div className="flex justify-evenly flex-wrap m-5">
                {
                    products.map((product, index) => {
                        return <>
                            {Test()}
                        </>

                        function Test() {

                            return <div className=" w-72 h-auto shadow rounded bg-white mb-2" key={index}>
                                <div className="p-2 ">
                                    <div className="flex justify-center h-52 ">
                                        <img onClick={() => {
                                            lightboxshow(product.image)
                                        }} className="w-40 cursor-pointer" src={`${product.image}`} alt="alt" />
                                    </div>
                                    <h1 className="my-2 text-sm text-black text-center">{product.category}</h1>
                                    <p className="my-2 text-bold text-xl text-orange-400">${product.price}</p>
                                    <div className="flex gap-2"> <button onClick={() => {
                                        clickme(product.image)
                                    }} className="px-3 py-1 rounded w-full bg-slate-800 text-white ">Buy</button> </div>
                                </div>
                            </div>;
                        }
                    })
                }

            </div></>
    )

    function LightBox({image_}:LightBoxProp) {
        return  <div>
            {
                close && <div className="light-box" id="light-box">
                <main className="w-full" id="main">
                     <div  className="close z-50"><img onClick={handleclose} className="w-10 flex cursor-pointer " src="/menue-close.svg" alt="" /></div>
                    <div id="content" className="content">
                        <div className="center">
                            <img src={image_} alt= {image_} />
                        </div>
    
                    </div>
    
                </main>
            </div>
            }
        </div>;
    }
}
