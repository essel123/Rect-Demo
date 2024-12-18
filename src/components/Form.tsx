import  { Component } from 'react';

class Form extends Component {
    

    render() {
        return (
            <div className='mt-5 md:mt-20 lg:mt-24 mx-5 '>
                
               <main className='w-full mx-auto shadow bg-green-900 max-w-md p-5 rounded-lg text-white'>
               <h1 className='text-center'>Sign Up</h1>

                <form className=' text-right ' action="/ind.html">
                    <label className='block mb-1' htmlFor="name">Name</label>
                    <input className=' block px-5 py-2 border-2 w-full focus:outline-none focus:ring  focus:ring-blue-500 placeholder:text-center mb-3 rounded bg-transparent focus:border-none' type="text" name="" id="name" required />

                    <label className='block mb-1' htmlFor="email">Email</label>
                    <input className=' block px-5 py-2 border-2 w-full focus:outline-none focus:ring  focus:ring-blue-500 placeholder:text-center mb-3 rounded  bg-transparent focus:border-none' type="email" name="" id="email" required />

                    <label className='block mb-1' htmlFor="name">password</label>
                    <input className=' block px-5 py-2 border-2 w-full focus:outline-none focus:ring  focus:ring-blue-500 placeholder:text-center rounded mb-3  bg-transparent focus:border-none' type="password" name="" id="password" />

                    <button className='w-full bg-blue-500 py-2 rounded text-white font-bold uppercase'>Register</button>


                </form>
               </main>
        

            </div>
        );
    }
}



export default Form;