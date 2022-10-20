import MinusIcon from "@/Components/icons/MinusIcon.jsx";
import PlusIcon from "@/Components/icons/PlusIcon";
import CartIcon from "@/Components/icons/CartIcon.jsx";
import { useContext, useState } from "react";
import { useCartDetails } from "@/context/useCartDetails";

const MainDetail = ({ objectProduct }) => {
  const { addCartProducts } = useContext(useCartDetails);

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

  const handleAddCart = () => {
    if (count === 0) {
      return;
    }
    addCartProducts({
      img: objectProduct.imagesThumb[0],
      id: objectProduct.id,
      discountPrice: (
        objectProduct.price *
        (1 - objectProduct.discount)
      ).toFixed(2),
      title: objectProduct.title,
      quantity: count,
    });
    setCount(0);
  };

  return (
    <section className="grid place-content-center px-4 md:px-0">
      <p className="text-orange-primary font-bold uppercase text-xs mb-4">
        {objectProduct.subtitle}
      </p>
      <h2 className="font-bold text-3xl md:text-5xl mb-6">
        {objectProduct.title}
      </h2>
      <p className="text-gray-600 text-sm mb-5">{objectProduct.description}</p>
      <div className="flex content-center items-center justify-between mb-8 md:flex-col md:items-start">
        <div>
          <span className="font-bold text-2xl mr-3">
            ${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}
          </span>
          <span className="bg-pale-orange px-3 rounded-md font-bold text-orange-primary">
            {objectProduct.discount * 100}%
          </span>
        </div>
        <span className="font-bold text-gray-300 line-through">
          ${objectProduct.price.toFixed(2)}
        </span>
      </div>
      <div className="md:flex">
        <div className="bg-gray-100 mb-3 md:w-2/4 rounded-md flex justify-between items-center px-6 md:mr-4 font-bold h-12">
          <button onClick={handleMinusProduct}>
            <MinusIcon />
          </button>
          <span>{count}</span>
          <button onClick={handlePlusProduct}>
            <PlusIcon />
          </button>
        </div>
        <button
          className="flex place-content-center items-center bg-orange-primary w-full h-12 font-bold px-2 rounded-md text-white hover:bg-orange-300 transition-all"
          onClick={handleAddCart}
        >
          <CartIcon className="fill-white" />
          <span className="ml-2">Add to card</span>
        </button>
      </div>
    </section>
  );
};

export default MainDetail;
