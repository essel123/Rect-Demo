import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setFormInfo } from "./store/counterSlice";

const Form = () => {
  // Use React Hook Form for managing form state and validation
  const { register,reset, handleSubmit, formState: { errors } } = useForm<FormData>();
  const controller = useAppDispatch();

  const formData  = useAppSelector(state=>state.counter.data.message)
  // Handle form submission
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(formData);
    controller(setFormInfo(data));

    alert(JSON.stringify(data));
    reset()
  };

  return (
    <div className="mt-5 md:mt-20 lg:mt-24 mx-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <h1 className="text-center text-2xl font-bold mb-6">Contact Us</h1>

        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            {...register("name", { required: "Required*" })}
          />
          {errors.name &&
            <span className="text-red-500 text-sm">
              {errors.name.message}
            </span>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email &&
            <span className="text-red-500 text-sm">
              {errors.email.message}
            </span>}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message &&
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
