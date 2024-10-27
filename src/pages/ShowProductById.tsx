import NavigationMenu from "../components/Navigation";
import FlowerCardContent from "../components/FlowerCard";
import ImageGallery from "../components/ProductData";
import { useParams } from "react-router-dom";

const ProductById = (): React.ReactNode => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <NavigationMenu />
      <section className="items-center justify-center w-full">
        <div className="flex flex-wrap justify-center gap-5">
          {ImageGallery.filter(
            (flower) => flower.id === parseInt(id || "", 10)
          ).map((flower) => (
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

export default ProductById;
