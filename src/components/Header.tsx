import { Disclosure } from "@headlessui/react";

import logo from "../assets/logo.png";
import logout_icon from "../assets/icons/logout.png";
import { ReactComponent as Chevron } from "../assets/icons/chevron.svg";

import common_data from "../data/common.json";
import header_data from "../data/header.json";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between gap-2">
      <img
        src={logo}
        alt="logo"
        className="w-3/4 pt-1 sm:pt-0 mx-auto sm:mx-0 sm:w-auto"
      />
      <div className="flex items-center justify-end">
        <Disclosure>
          {({ open }) => {
            return (
              <div>
                <Disclosure.Button
                  className={`flex flex-col justify-end px-4 py-2 ${
                    open ? "bg-primary-600 text-white" : ""
                  }`}
                >
                  <p
                    className={`text-end ${
                      open ? "text-primary-300" : "text-primary-600"
                    }`}
                  >
                    {common_data.fund_name}
                  </p>
                  <div className="flex gap-2 items-center justify-center">
                    {common_data.user}
                    <Chevron
                      className={`w-2 mt-2 my-auto fill-current ${
                        open ? "-rotate-90" : "rotate-90"
                      }`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="absolute z-10 flex gap-4 p-4 right-0 bg-primary-700 max-w-[90vw] overflow-scroll">
                  {header_data.user_dropdown.map((col, idx) => (
                    <div key={idx}>
                      <h3 className="text-primary-300">{col.title}</h3>
                      <div>
                        {col.content.map((route, idx) => (
                          <div key={idx}>
                            <a className="text-white" href={route.link}>
                              {route.name}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Disclosure.Panel>
              </div>
            );
          }}
        </Disclosure>
        <button className="px-2" onClick={() => console.log("logout")}>
          <img src={logout_icon} alt="logout-icon" className="w-8" />
        </button>
      </div>
    </header>
  );
};

export default Header;
