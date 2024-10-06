import NavigationMenu from "../components/Navigation";
import FlowerCardContent from "../components/FlowerCard";
import ImageGallery from "../components/ProductData";

const Product = (): React.ReactNode => {
  return (
    <>
      <NavigationMenu />
      <section className="w-full justify-center items-center">
        <div className="flex justify-center gap-5 flex-wrap">
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
      </section>
    </>
  );
};

export default Product;
