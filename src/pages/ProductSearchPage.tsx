import NavigationMenu from "../components/Navigation";
// import FlowerCardContent from "../components/FlowerCard";
// import ImageGallery from "../components/ProductData";
import { useState } from "react";

const SearchForm = () => {
  const searchProduct = document.getElementById("product-name");
  window.location.assign(`${searchProduct}`);
};

const Product = (): React.ReactNode => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <NavigationMenu />
      <section className="flex items-center justify-center w-full h-96">
        {isSearchOpen && (
          <div
            className="flex flex-col items-start justify-start px-32 py-12 border-2 border-rose-500 rounded-xl"
            id="search-content"
          >
            <button
              className="flex self-end border-2 outline-none border-rose-500 rounded-xl"
              onClick={(e) => {
                e.preventDefault();
                closeSearch();
              }}
            >
              <i className="text-4xl font-bold ri-close-line text-rose-500 "></i>
            </button>
            <form
              onSubmit={SearchForm}
              className="flex flex-col items-start justify-start gap-2"
            >
              <label
                htmlFor="product-name"
                className="text-4xl font-bold text-rose-500"
              >
                Search any product
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="product-name"
                  className="px-3 text-2xl text-white rounded-lg outline-none w-96 bg-rose-500"
                  name="product-name"
                />
                <button
                  className="px-5 py-1 text-xl font-bold text-white rounded-xl bg-rose-500"
                  type="submit"
                >
                  Search <i className="ri-search-line"></i>
                </button>
              </div>
            </form>
          </div>
        )}
        {/* <div className="flex flex-wrap justify-center gap-5">
          {ImageGallery.filter((flower) => flower.id == 3).map((flower) => (
            <FlowerCardContent
              key={flower.id}
              Link={flower.link}
              Name={flower.name}
              Price={flower.price}
              CTA="#"
            />
          ))}
        </div> */}
      </section>
    </>
  );
};

export default Product;
