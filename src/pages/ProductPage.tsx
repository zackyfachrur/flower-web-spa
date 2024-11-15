import NavigationMenu from "../components/Navigation";
import FlowerCardContent from "../components/FlowerCard";
import ImageGallery from "../components/ProductData";

const Product = (): React.ReactNode => {
  return (
    <>
      <NavigationMenu />
      <section className="items-center justify-center w-full">
        <div className="flex flex-wrap justify-center gap-5">
          {ImageGallery.map((flower) => (
            <FlowerCardContent
              key={flower.id}
              Link={flower.link}
              Name={flower.name}
              Price={flower.price}
              CTA="#"
            />
          ))}
        </div>
        {/* <div className="flex flex-wrap justify-center gap-5">
          {ImageGallery.filter((flower) => flower.id == 4).map((flower) => (
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
