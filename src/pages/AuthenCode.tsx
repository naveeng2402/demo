import bg from "../assets/pawel-czerwinski-BFxnx0UHVGM-unsplash.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const AuthenCode = () => {
  return (
    <div
      className="h-screen w-screen bg-black/80 grid place-items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto h-auto w-96 px-4 py-16 sm:px-6 lg:px-8 bg-slate-50/70 rounded-md content-center">
        {/* title of the form */}
        <div className="mx-auto max-w-lg text-center">
          <div
            className="h-10 w-60 bg-no-repeat"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>

          {/* Title */}
        </div>
        <h2 className="font-bold text-2xl mt-2 pb-2">Lorem ipsum dolor</h2>
        <p className="font-medium text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit,
          name123***@gmail.com
        </p>

        {/* Credentials */}
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700 pt-5"
          >
            Enter the Authentication Code
          </label>
          <input
            type="text"
            id="FirstName"
            name="first_name"
            className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        {/* New code Request */}
        <a href="#" className="text-cyan-500 font-medium text-sm ml-52 pt-2">
          Request New Code
        </a>

        {/* Checkbox */}
        <div className="flex flex-col py-6">
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
            ></input>
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-semibold text-gray-700"
            >
              Lorem ipsum dolor sit amet consectetur
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="ml-3 inline-block rounded-md bg-green-600 opacity-100 px-10 py-1 text-xs font-medium text-white"
          >
            <Link to="/">Finish</Link>
          </button>
          <button
            type="submit"
            className="ml-3 inline-block rounded-md bg-red-500 opacity-100 px-9 py-3 text-xs font-medium text-white"
          >
            <Link to="/login">Cancel</Link>
          </button>
        </div>

        {/* Span */}
        <p className="mt-4 text-gray-500 text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.nobis eius
          eaque
        </p>
      </div>
    </div>
  );
};
