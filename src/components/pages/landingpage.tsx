import { useEffect, useState } from "react";
import { useForm} from "react-hook-form";

import Loader from "../Loader";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type user ={
    name: string;
    email: string;
    password: string;
    repeatpassword: string;
}

function LandingPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const {register,handleSubmit, formState:{errors}} = useForm<user>();

  const fetchFromDummyApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "get",
          headers: { "Content-Type": "application/json" },
          body: null
        }
      );
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const onSubmit = (data: user) =>{
    alert(JSON.stringify(data));

  }
  useEffect(() => {
    fetchFromDummyApi();
  }, []);

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 p-4 text-white text-center w-full">
        <h1 className="text-3xl font-bold w-full">
          Welcome to Our Landing Page
        </h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl font-semibold mb-4">Discover Our Features</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <button
          className="bg-blue-600 text-white px-10 py-5 rounded-full hover:bg-blue-700 transition duration-300 p-10"
          onClick={fetchFromDummyApi}
        >
          Get Started
        </button>

        {/* <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4  gap-4 mt-8 mb-20">
                    {loading ? <Loader/> : posts.map((post) => (
                        <div onClick={()=>alert(post.id)} key={post.id} className= "cursor-pointer bg-white p-4 rounded shadow">
                            <h3 className="text-xl font-bold">{post.title}</h3>
                            <p className="text-gray-700">{post.body}</p>
                        </div>
                    ))}
                </div> */}
      </main>

      <form action="" className="bg-gray-200 p-4 w-1/4 " onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center">Register</h1>
        <label htmlFor="name">
          Name
          <input
            type="text"
            {
                ...register("name",{required: "Name is required"})
            }
            className=" py-2 rounded-lg border outline-none focus:border-2 text-center"
          />
        </label>
        <label htmlFor="name">
          Email
          <input
            type="email"
            {
                ...register("email",{required: "Email is required"})
            }
            className=" py-2 rounded-lg border outline-none focus:border-2 text-center"
          />
        </label>
        <label htmlFor="name">
           Password
          <input
            type="password"
            {
                ...register("password",{required: "Password is required"})
            }
            className=" py-2 rounded-lg border outline-none focus:border-2 text-center"
          />
        </label>
        <label htmlFor="name">
          Repeat Password
          <input
            type="password"
            {
                ...register("repeatpassword", {
                    required: "Repeat Password is required",
                    validate: (value, { password }) => value === password || "Passwords do not match"
                })
            }
            className=" py-2 rounded-lg border outline-none focus:border-2 text-center"
          />
          <p>{errors.repeatpassword? errors.root?.message:''}</p>
        </label>

        <button className="w-full bg-blue-700 p-2 rounded-lg">Submit</button>
      </form>
      <footer className="bg-gray-800 p-4 w-full text-white text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
