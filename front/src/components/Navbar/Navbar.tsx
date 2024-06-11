import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";


const Navbar = ({ activeSection}: any) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={` fixed w-full z-20 mt-10 transition-transform duration-[1s] ${showNavbar ? 'translate-y-0' : '-translate-y-[130px]'}`}>
      <div className="w-screen flex flex-wrap items-center justify-between px-10">
        <div className="flex flex-col space-x-3">
          <span className="principal text-[2rem] text-white font-[clash-medium]">
            CONSORCIFY
          </span>
        </div>

        <div className="flex lg:order-2  lg:space-x-0 font-[clash-regular]">
          <Link
            href="/login"
            type="button"
            className="button-log text-white rounded-[50px] px-5 py-3 border backdrop-blur-sm"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            type="button"
            className="button-log text-black rounded-[50px] px-5 py-3 bg-white font-bold"
          >
            Registar
          </Link>

          <div className="dropdown">
            <button
              type="button"
              className="inline-flex items-center pl-3 justify-center text-sm text-gray-300 rounded-lg lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M4 5L20 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L20 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="menu  text-white  backdrop-blur-sm">
              <a href="#inicio">INICIÓ</a>
              <a href="#nosotros">NOSOTROS</a>
              <a href="#preguntas">PREGUNTAS</a>
            </div>
          </div>
        </div>

        <div className="h-[6vh] items-center justify-between w-full lg:flex lg:w-auto ">
          <ul className="list  bg-[#34343441] backdrop-blur-sm flex flex-col mt-10 font-medium border rounded-[50px] p-5 lg:space-x-14  lg:flex-row lg:mt-0 lg:border-1 ml-[0.5rem] font-[clash-regular]">
            <li className="py-[5px]">
              <a
                href="#inicio"
                className={`py-3 px-5 text-white${
                  activeSection === "inicio"
                    ? "  bg-white rounded-[50px] !text-[#000000]"
                    : ""
                }`}
              >
                INICIÓ
              </a>
            </li>
            <li className="py-[5px]">
              <a
                href="#nosotros"
                className={`py-3 px-5 text-white ${
                  activeSection === "nosotros"
                    ? " !text-[#000000] bg-white rounded-[50px] "
                    : ""
                }`}
              >
                NOSOTROS
              </a>
            </li>
            <li className="py-[5px]">
              <a
                href="#preguntas"
                className={`py-3 px-5 text-white ${
                  activeSection === "preguntas"
                    ? " !text-[#000000] bg-white rounded-[50px] "
                    : ""
                }`}
              >
                OPINIONES
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
