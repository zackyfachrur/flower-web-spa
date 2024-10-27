import { useParams } from "react-router-dom";
import FlowerCardContent from "../components/FlowerCard";
import ImageGallery from "../components/ProductData";
import NavigationMenu from "../components/Navigation";

const ProductByName = (): React.ReactNode => {
  const { nameProduct } = useParams<{ nameProduct: string }>();

  return (
    <>
      <NavigationMenu />
      <section className="items-center justify-center w-full">
        <div className="flex flex-wrap justify-center gap-5">
          {ImageGallery.filter((flower) => flower.name === nameProduct).map(
            (flower) => (
              <FlowerCardContent
                key={flower.id}
                Link={flower.link}
                Name={flower.name}
                Price={flower.price}
                CTA="#"
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default ProductByName;
