import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const base =
  "rounded-md px-3 py-2 font-medium transition text-[19px]";

const navClass = ({ isActive }) =>
  isActive
    ? `${base} text-black font-black}`
    : `${base} text-gray-700 hover:underline`;

const NAV_HEIGHT = 72; // h-18

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Spacer: SATU KALI, TIDAK PERNAH BERUBAH */}
      <div style={{ height: NAV_HEIGHT }} />

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px
          ${isScrolled
            ? "bg-white shadow-md after:bg-gray-200"
            : "bg-white after:bg-transparent"}
        `}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100">
                <span className="sr-only">Open main menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex flex-1 items-center justify-center sm:justify-start orbitron-semibold">
              <p className="text-2xl">Planetary</p>
            </div>

            {/* Desktop menu */}
            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:ml-6">
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  <NavLink to="/" end className={navClass}>Home</NavLink>
                  <NavLink to="/planet" className={navClass}>Planet</NavLink>
                  <NavLink to="/funfact" className={navClass}>Fun Fact</NavLink>
                  <NavLink to="/FAQ" className={navClass}>FAQ</NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        <el-disclosure id="mobile-menu" hidden class="block sm:hidden">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/planet" className={navClass}>Planet</NavLink>
            <NavLink to="/funfact" className={navClass}>Fun Fact</NavLink>
            <NavLink to="/FAQ" className={navClass}>FAQ</NavLink>
          </div>
        </el-disclosure>
      </nav>
    </>
  );
};

export default Navbar;
