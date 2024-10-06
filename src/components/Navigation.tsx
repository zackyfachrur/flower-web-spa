import React from "react";
import NavLogo from "../assets/Web-Logo.png";

interface NavLinkProps {
  Link: string;
  Content: string;
  className: string;
}

function NavLink({ Link, Content, className }: NavLinkProps): React.ReactNode {
  return (
    <li>
      <a href={Link} className={className}>
        {Content}
      </a>
    </li>
  );
}

const NavigationMenu = (): React.ReactNode => {
  return (
    <nav className="h-20 flex justify-around items-center">
      <div className="flex justify-center items-center">
        {/* Logo */}
        <img src={NavLogo} alt="Nav Icon" className="w-52" />
        {/* Search */}
        <div className="flex gap-2 bg-transparent border-2 border-rose-500 px-5 py-1 text-md rounded-full">
          <input
            type="text"
            className="bg-transparent outline-none focus:outline-none w-72 text-md font-semibold"
            placeholder="Cari Produk..."
          />
          <button className="bg-rose-500 px-5 rounded-full">
            <i className="ri-search-line text-white "></i>
          </button>
        </div>
      </div>
      {/* Nav Ul */}
      <ul className="flex justify-center items-center">
        <NavLink
          Link="#"
          Content="Product"
          className="font-semibold text-md text-white bg-rose-500 px-5 py-2 hover:bg-white border-2 border-rose-500 hover:text-rose-500 hover:border-rose-500 rounded-l-full"
        />
        <NavLink
          Link="#"
          Content="About"
          className="font-semibold text-md text-white bg-rose-500 px-5 py-2 hover:bg-white border-2 border-rose-500 hover:text-rose-500 hover:border-rose-500"
        />
        <NavLink
          Link="#"
          Content="Contact"
          className="font-semibold text-md text-white bg-rose-500 px-5 py-2 hover:bg-white border-2 border-rose-500 hover:text-rose-500 hover:border-rose-500"
        />
        <NavLink
          Link="#"
          Content="FAQ"
          className="font-semibold text-md text-white bg-rose-500 px-5 py-2 rounded-r-full hover:bg-white border-2 border-rose-500 hover:text-rose-500 hover:border-rose-500"
        />
      </ul>
    </nav>
  );
};

export default NavigationMenu;
