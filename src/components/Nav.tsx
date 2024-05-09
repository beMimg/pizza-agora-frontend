import { useState } from "react";
import { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";

const Nav = () => {
  // This state will be usefull to nav bar options being hide or not depending on width of the screen.
  const [isMdScreen, setIsMdScreen] = useState(Boolean);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleResize() {
    const mdMediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMdScreen(mdMediaQuery.matches);
  }

  useEffect(() => {
    // When the page refreshes we need to know the initial state of the width.
    // The Event Listener is not enough since will only be active when resize.
    const firstScreenSize = window.innerWidth;
    if (firstScreenSize <= 767) {
      setIsMdScreen(true);
    } else {
      setIsMdScreen(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className=" bg-transparent">
      <div className="mx-auto flex w-full max-w-7xl flex-col  items-center justify-between p-6 text-white md:justify-around">
        <div className="flex w-full flex-row items-center justify-between ">
          <p className="text-2xl font-bold xl:text-3xl">Agora</p>
          {isMdScreen ? (
            <FiMenu
              className={`text-2xl ${isMenuOpen ? "-rotate-90 transition-all" : "rotate-0 transition-all "}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <div className="flex flex-row gap-7 font-medium xl:text-xl">
              <NavLinks />
            </div>
          )}
        </div>
        {isMdScreen && (
          <div
            className={`flex h-0 flex-col items-center gap-4 overflow-hidden font-medium opacity-0 transition-all   ${isMenuOpen ? " h-[105px] opacity-100 " : ""}`}
          >
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
