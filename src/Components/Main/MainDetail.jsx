import MinusIcon from "@/Components/icons/MinusIcon.jsx";
import PlusIcon from "@/Components/icons/PlusIcon";
import CartIcon from "@/Components/icons/CartIcon.jsx";
import { useState } from "react";

const MainDetail = () => {
  const [count, setCount] = useState(0);
  const handleMinusProduct = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const handlePlusProduct = () => {
    setCount(count + 1);
  };

  return (
    <section className="grid place-content-center px-4 md:px-0">
      <p className="text-orange-primary font-bold uppercase text-xs mb-4">
        Sneaker Company
      </p>
      <h2 className="font-bold text-3xl md:text-5xl mb-6">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-gray-600 text-sm mb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex content-center items-center justify-between mb-8 md:flex-col md:items-start">
        <div>
          <span className="font-bold text-2xl mr-4">$125.00</span>
          <span className="bg-pale-orange px-3 rounded-md font-bold text-orange-primary">
            50%
          </span>
        </div>
        <span className="font-bold text-gray-300 line-through">$250.00</span>
      </div>
      <div>
        <div className="bg-gray-100 mb-3 rounded-md flex justify-between items-center px-6 font-bold h-12">
          <button onClick={handleMinusProduct}>
            <MinusIcon />
          </button>
          <span>{count}</span>
          <button onClick={handlePlusProduct}>
            <PlusIcon />
          </button>
        </div>
        <button className="flex place-content-center items-center bg-orange-primary w-full h-12 font-bold px-2 rounded-md text-white hover:bg-pale-orange">
          <CartIcon className="fill-white" />
          <span className="ml-2">Add to card</span>
        </button>
      </div>
    </section>
  );
};

export default MainDetail;
