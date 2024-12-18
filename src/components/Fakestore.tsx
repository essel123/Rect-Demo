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

    const [products, setproduct] = useState<Product[]>([]);

    useEffect(() => {


        fetch("https://fakestoreapi.com/products/").then(res => res.json()).then(data => setproduct(data)).catch(err => console.log(err))
    }, []);

    function clickme(image:string) {

        alert(image);
    }

    function lightboxshow() {

        const lightbox = document.getElementById("light-box")

        if (lightbox) {
            lightbox.style.display = "flex"
        }
        // const content = document.getElementById("content")



        const close = document.getElementById("close");

        close?.addEventListener('click', () => {


            alert("hi")
        })

    }



    (function () {

    })()




    return (
        <>

            <div className="light-box" id="light-box">
                <main className="w-full" id="main">
                    <div className="close"><img className="w-10 flex cursor-pointer " src="/menue-close.svg" alt="" /></div>
                    <div id="content" className="content">
                        <div className="center">
                            <img alt="" />
                        </div>

                    </div>

                </main>
            </div>

            <nav className="flex justify-end m-5 pr-5">

                {/* 
        <input  className=" search border rounded border-blue-300 focus:outline-none focus:ring focus:ring-blue-500 text-center" type="text" placeholder="Search by category" /> */}
                <select className="w-40 border h-10 text-center cursor-pointer" name="category" id="category" onChange={(change) => console.log(change.target.value)}>
                    <option value="category">Category</option>
                    <option value="women's clothing">wemen's clothing</option>
                    <option value="men's clothing">men's clothing</option>
                </select>

            </nav>

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
                                            lightboxshow()
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
}
