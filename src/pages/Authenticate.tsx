import bg from "../assets/pawel-czerwinski-BFxnx0UHVGM-unsplash.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Authenticate = () => {
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
        </div>
        <h2 className="font-bold text-2xl mt-2 pb-2">Lorem ipsum dolor</h2>
        <p className="font-medium text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, Magni nisi
          ducimus fuga veritatis.
        </p>

        {/* Checkbox */}
        <div className="flex flex-col p-2">
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
            ></input>
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-semibold text-gray-900"
            >
              Lorem ipsum
            </label>
          </div>
          <p className="font-normal text-sm p-1">name123***@gmail.com</p>
        </div>
        {/* Checkbox */}

        {/* Checkbox */}
        <div className="flex flex-col p-2">
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
            ></input>
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-semibold text-gray-900"
            >
              Reiciendis iusto
            </label>
          </div>
          <p className="font-normal text-sm p-1">123-XXX-XXX76</p>
        </div>
        {/* Checkbox */}

        {/* Checkbox */}
        <div className="flex flex-col p-2">
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
            ></input>
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-semibold text-gray-900"
            >
              Dolor sit
            </label>
          </div>
          <p className="font-normal text-sm p-1">nobis eius eaque</p>
        </div>
        {/* Checkbox */}

        {/* Button Starts */}
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="ml-3 inline-block rounded-md bg-green-600 opacity-100 px-10 py-1 text-xs font-medium text-white"
          >
            <Link to="/Authencode">Send code</Link>
          </button>
          <button
            type="submit"
            className="ml-3 inline-block rounded-md bg-red-500 opacity-100 px-10 py-3 text-xs font-medium text-white"
          >
            <Link to="/login">Cancel</Link>
          </button>
        </div>
        {/* Button Ends */}

        {/* Span */}
        <p className="mt-4 text-gray-500 text-center text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.nobis eius
          eaque
        </p>
      </div>
    </div>
  );
};
