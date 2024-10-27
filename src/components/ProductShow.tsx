import React from "react";
import ImageTest from "../assets/product/flower-1.jpeg";

// interface ShowProductProps {
//   Link: string;
//   ProductName: string;
//   ProductDescription: string;
// }

const ShowProduct = (): //      {
//   Link,
//   ProductName,
//   ProductDescription,
//      }: ShowProductProps
React.ReactNode => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex justify-center gap-52 items-start mt-10">
          <img
            src={ImageTest}
            className="w-96 rounded-lg"
            alt="Image Product"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl font-bold text-rose-500">Golden Rosses</h1>
            <ul className="text-xl font-semibold">
              <li>
                <i className="ri-blaze-line text-rose-500"></i> Tampilan Alami
                dan Menawan
              </li>
              <li>
                <i className="ri-blaze-line text-rose-500"></i> Variasi Bentuk
                dan Warna
              </li>
              <li>
                <i className="ri-blaze-line text-rose-500"></i> Memiliki Kesan
                Elegan dan Mewah
              </li>
            </ul>
            <form action="/product" className="flex flex-col gap-2">
              <input
                type="text"
                name="nama-penerima"
                placeholder="Nama Penerima"
                className="bg-white outline-none border-2 border-rose-500 px-2 py-1"
              />
              <input
                type="text"
                name="nama-pengirim"
                placeholder="Nama Pengirim"
                className="bg-white outline-none border-2 border-rose-500 px-2 py-1"
              />
              <textarea
                name="ucapan"
                id="ucapan"
                placeholder="Kata Ucapan.."
                className="bg-white outline-none border-2 border-rose-500 px-2 py-1"
              ></textarea>
              <input
                type="number"
                name="telepon-penerima"
                id="telepon-penerima"
                placeholder="+62"
                className="bg-white outline-none border-2 border-rose-500 px-2 py-1 hover:overflow-hidden"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowProduct;
