import { useState } from "react";
import data from "../assets/data.json";

function Ebook() {
  const [index, setindex] = useState(0);
  return (
    <div className="container mx-auto w-1/2 m-auto flex flex-col justify-center align-middle  rounded-lg bg-red-400 text-white text-center p-4">
      <h1 className="text-2xl font-bold font-roboto">The Mask Halls</h1>
      <h2 className="text-blue-600 my-5 font-mono">
        {data[index].title}
      </h2>
      <p className="text-lg my-5">
        {data[index].poem}
      </p>

      <div className="flex justify-between w-full">
        {index > 0 &&
          <button
            className="w-1/3 bg-white rounded py-2 text-black uppercase font-bold"
            onClick={() => setindex(index - 1)}
          >
            prev
          </button>}
        {
            index < data.length - 1 &&
            <button
                className="w-1/3 bg-white rounded py-2 text-black uppercase font-bold"
                onClick={() => setindex(index + 1)}
            >
                next
            </button>
        }
      </div>
    </div>
  );
}

export default Ebook;
