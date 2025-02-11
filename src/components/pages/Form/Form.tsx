import { useForm } from "react-hook-form";
import "./form.css";
import { Link } from "react-router-dom";

function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<
    FormValues
  >();

  type FormValues = {
    name: string;
    email: string;
    streetAddress: string;
    postalCode: string;
    zipCode: string;
    age: number;
    birthTown: string;
    gender: string;
  };

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data));
    reset();
  };

  const pages = [1, 2];

  return (
    <div className="">
      <nav>
        <ul className="nav flex gap-4">
          {pages.map(page =>
            <li key={page}>
              <Link to={`/page/${page}`} className="nav-link">
                Page {page}
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="centered ">
        <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className=" form p-5 rounded-sm"
        >
          <h1 className=" text-center  underline">Register</h1>
          <label htmlFor="name" className="flex flex-col">
            Name
            <input
              {...register("name", {
                required: "Name field is required",
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Invalid Name"
                }
              })}
              type="text"
              className="rounded p-2 ring-none outline-none bg-transparent"
            />
            {errors.name &&
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>}
          </label>
          <label htmlFor="email" className="flex flex-col">
            Email
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid Email"
                }
              })}
              className=" rounded p-2 ring-none outline-none "
            />
            {errors.email &&
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>}
          </label>

          <div className="details">
            <label htmlFor="street address" className="flex flex-col">
              Street Address
              <input
                {...register("streetAddress")}
                type="text"
                className=" rounded p-2 ring-none outline-none "
              />
            </label>
            <label htmlFor="postal code" className="flex flex-col">
              Postal Code
              <input
                {...register("postalCode")}
                type="text"
                className=" rounded p-2 ring-none outline-none "
              />
            </label>
            <label htmlFor="zip code" className="flex flex-col">
              Zip Code
              <input
                {...register("zipCode")}
                type="text"
                className=" rounded p-2 ring-none outline-none "
              />
            </label>
          </div>

          <div className="details">
            <label htmlFor="age" className="flex flex-col">
              Age
              <input
                {...register("age", {
                  required: "invalid age",
                  min: {
                    value: 18,
                    message: "You must be at least 18 years old"
                  }
                })}
                type="number"
                className=" rounded p-2 ring-none outline-none "
              />
              {errors.age &&
                <span className="text-red-500 text-sm">
                  {errors.age.message}
                </span>}
            </label>
            <label htmlFor="email" className="flex flex-col">
              Birth Town
              <input
                {...register("birthTown")}
                type="text"
                className=" rounded p-2 ring-none outline-none "
              />
            </label>

            <label htmlFor="gender">
              Select Gender
              <select id="" {...register("gender")}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>

          <button
            className="bg-blue-950 rounded w-full my-2 p-2 text-white font-bold uppercase"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
