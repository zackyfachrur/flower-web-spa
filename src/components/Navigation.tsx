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
    <nav className="flex items-center justify-around h-20">
      <div className="flex items-center justify-center">
        {/* Logo */}
        <img src={NavLogo} alt="Nav Icon" className="w-52" />
      </div>
      {/* Nav Ul */}
      <ul className="flex items-center justify-center">
        {/* Search */}
        <button
          type="submit"
          className="flex gap-2 px-5 py-2 font-semibold bg-white border-2 rounded-l-full border-rose-500 text-rose-500 hover:translate-x-2"
          onClick={() => window.location.assign("/search")}
        >
          <i className="text-rose-500 ri-search-line "></i>
          Search
        </button>
        <NavLink
          Link="/"
          Content="Product"
          className="px-5 py-2 font-semibold text-white border-2 text-md bg-rose-500 hover:bg-white border-rose-500 hover:text-rose-500 hover:border-rose-500"
        />
        <NavLink
          Link="#"
          Content="About"
          className="px-5 py-2 font-semibold text-white border-2 text-md bg-rose-500 hover:bg-white border-rose-500 hover:text-rose-500 hover:border-rose-500"
        />
        <NavLink
          Link="#"
          Content="Contact"
          className="px-5 py-2 font-semibold text-white border-2 text-md bg-rose-500 hover:bg-white border-rose-500 hover:text-rose-500 hover:border-rose-500"
        />
        <NavLink
          Link="#"
          Content="FAQ"
          className="px-5 py-2 font-semibold text-white border-2 rounded-r-full text-md bg-rose-500 hover:bg-white border-rose-500 hover:text-rose-500 hover:border-rose-500"
        />
      </ul>
    </nav>
  );
};

export default NavigationMenu;
