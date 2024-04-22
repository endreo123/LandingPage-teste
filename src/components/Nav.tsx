import { getImage } from "astro:assets";
import { useState, type FormEvent } from "react";
import Cart from "../assets/imgs/navbar/cart.png";

const CartImage = await getImage({ src: Cart, format: "avif" });

function SearchInput() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2 w-9/12">
        <input type="text" className="grow" placeholder="Search" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="relative -ml-20 w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </label>
    </form>
  );
}
export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="navbar bg-green-600 z-50">
        <div className="navbar-start">
          {/* Hamburguer menu */}
          <button
            onClick={() => toggleSidebar()}
            className="flex flex-col space-y-1 lg:hidden"
          >
            <span className="h-0.5 w-8 bg-black"></span>
            <span className="h-0.5 w-8 bg-black"></span>
            <span className="h-0.5 w-8 bg-black"></span>
          </button>

          {/* Desktop */}
          <div className="hidden lg:block">
            <SearchInput />
          </div>
        </div>
        <div className="navbar-center">
          {/* Mobile */}
          <div className="lg:hidden">
            <SearchInput />
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex space-x-6 text-xl">
            <li>
              <button className="hover:underline hover:underline-offset-1">
                <a href="https://adsomos.com/">Home</a>
              </button>
            </li>
            <span className="block mt-2 bg-black h-4 w-0.5"></span>
            <li>
              <button className="hover:underline hover:underline-offset-1">
                <a href="https://adsomos.com/">About</a>
              </button>
            </li>
            <span className="block mt-2 bg-black h-4 w-0.5"></span>
            <li>
              <button className="hover:underline hover:underline-offset-1">
                <a href="https://adsomos.com/">Shop</a>
              </button>
            </li>
            <span className="block mt-2 bg-black h-4 w-0.5"></span>
            <li>
              <button className="hover:underline hover:underline-offset-1">
                <a href="https://adsomos.com/">Help</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            id="botao_carinho_de_compras"
            className="btn btn-neutral hover:bg-slate-600"
          >
            <a
              href="https://adsomos.com/"
              className="text-white flex text-opacity-70 my-1 mx-1.5 space-x-1.5"
            >
              <img
                src={CartImage.src}
                width="30"
                alt="Imagem de um carinho de compra"
              />
              <span className="hidden lg:block mt-2"> Your Cart </span>
            </a>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`top-0 left-0 fixed bg-blue-500 w-[55vw] h-full p-10 z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300 lg:hidden`}
      >
        <button
          onClick={() => toggleSidebar()}
          className="text-2xl text-white fixed top-4 left-4 z-20"
        >
          X
        </button>
        <ul className="flex flex-col text-white text-xl mt-5 space-y-3">
          <li>
            <button>
              <a href="https://adsomos.com/">Home</a>
            </button>
          </li>
          <li>
            <button>
              <a href="https://adsomos.com/">About</a>
            </button>
          </li>
          <li>
            <button>
              <a href="https://adsomos.com/">Shop</a>
            </button>
          </li>
          <li>
            <button>
              <a href="https://adsomos.com/">Help</a>
            </button>
          </li>
        </ul>
      </div>
      <div className="block h-full w-full z-50 bg-black lg:hidden"></div>
    </>
  );
}
