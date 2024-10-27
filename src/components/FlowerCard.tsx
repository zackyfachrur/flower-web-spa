import React from "react";

interface FlowerCardProps {
  Link: string;
  Name: string;
  Price: string;
  CTA: string;
}

const FlowerCardContent = ({
  Link,
  Name,
  Price,
  CTA,
}: FlowerCardProps): React.ReactNode => {
  return (
    <div className="self-start w-1/2 max-w-sm p-2 border-2 rounded-lg shadow border-rose-200 bg-rose-500">
      <a href="#">
        <img
          className="object-cover w-full pb-5 h-96"
          src={Link}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-white">
            {Name}
          </h5>
        </a>

        <span className="font-bold text-white text-md">{Price}</span>
        <div className="flex items-center justify-start gap-2 mt-2">
          <a
            href={CTA}
            className="px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-rose-900 bg-rose-700 hover:bg-rose-800 "
          >
            Show Product
          </a>
          <a
            href={CTA}
            className="px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none hover:underline hover:underline-offset-4 "
          >
            Order Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlowerCardContent;
