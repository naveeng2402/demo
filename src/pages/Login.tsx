import bg from "../assets/pawel-czerwinski-BFxnx0UHVGM-unsplash.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
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
        {/* starting of the form*/}

        <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Password */}

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* span tag */}
          <p className="mt-4 text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
          {/* span tag ends */}

          {/* button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-blue-500 opacity-100 px-28 py-3 text-sm font-medium text-white"
            >
              <Link to="/authentication">Sign in</Link>
            </button>
            {/* button ends */}
          </div>
        </form>
        {/* ending of the form*/}
      </div>
    </div>
  );
};

export default Login;
