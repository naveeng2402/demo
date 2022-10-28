import megaMenuData from "../data/megaMenu.json";
import { ReactComponent as Chevron } from "../assets/icons/chevron.svg";
import { ReactComponent as Hamburger } from "../assets/icons/hamburger.svg";
import { Disclosure } from "@headlessui/react";
import { createRef, useMemo, useRef, useState } from "react";

const MegaMenu = () => {
  // References for all the disclosure buttons
  const navRegionRefs = useMemo(() => {
    return (
      megaMenuData.map(() => {
        return createRef<HTMLButtonElement>();
      }) ?? []
    );
  }, [megaMenuData]);

  const handleClosingOthers = (id: string) => {
    const otherRefs = navRegionRefs.filter((ref) => {
      return ref.current?.getAttribute("data-id") !== id;
    });

    otherRefs.forEach((ref) => {
      const isOpen = ref.current?.getAttribute("data-open") === "true";

      if (isOpen) {
        ref.current?.click();
      }
    });
  };

  const navRef = useRef<HTMLElement>(null);

  return (
    <>
      <button
        className="absolute left-4 top-[20vw] sm:hidden"
        onClick={() => {
          navRef.current?.classList.toggle("hidden");
        }}
      >
        <Hamburger className="w-8" />
      </button>
      <nav
        ref={navRef}
        className="block w-screen px-4 sm:flex bg-primary-600 sm:overflow-scroll text-white"
      >
        <a
          href="#"
          className="px-4 py-2"
          onClick={() => handleClosingOthers("-1")}
        >
          Home
        </a>
        {megaMenuData.map((menu, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="">
                <Disclosure.Button
                  ref={navRegionRefs[idx]}
                  data-id={idx}
                  data-open={open}
                  className={`px-4 py-2 mx-auto sm:mx-0 flex gap-2 items-center justify-center ${
                    open ? "bg-primary-700" : "bg-primary-600"
                  }`}
                  onClick={() => handleClosingOthers(idx.toString())}
                >
                  {menu.title}
                  <Chevron
                    className={`w-2 fill-current mt-1 ${
                      open ? "-rotate-90" : "rotate-90"
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="sm:absolute flex flex-wrap gap-4 bg-primary-700 py-2 px-4  w-full left-0">
                  {menu.content.map((cont, idx) => {
                    return (
                      <div key={idx}>
                        <h3 className="text-primary-300 text-xl">
                          {cont.subtitle}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {cont.pages.map((link, idx) => {
                            return (
                              <a href={link.link} key={idx}>
                                {link.name}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </nav>
    </>
  );
};

export default MegaMenu;
