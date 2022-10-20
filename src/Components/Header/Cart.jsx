import { useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";
import imgThumb1 from "@/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../icons/DeleteIcon";

const Cart = ({ props }) => {
  const { cartProducts, deleteCartProducts } = useContext(useCartDetails);
  return (
    <section className="absolute top-[125%] md:top-[85%] right-0 z-20 w-full md:max-w-[400px]">
      <div className="mx-4 pb-5 bg-white rounded-xl shadow-2xl">
        <h4 className="p-4 font-bold">Cart</h4>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-16 font-bold text-gray-400 text-sm text-center">
            Your cart is empty
          </p>
        )}
        {cartProducts.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] p-4 items-center"
          >
            <img src={imgThumb1} alt="" className="rounded-md" />
            <div className="flex flex-col mx-3 text-sm text-gray-500">
              <h6>{product.title}</h6>
              <div>
                <span className="mr-1">
                  ${product.discountPrice} x {product.quantity}
                </span>
                <span className="font-bold text-black">
                  ${(product.discountPrice * product.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="ml-auto"
              onClick={() => deleteCartProducts(product.id)}
            >
              <DeleteIcon className="hover:fill-black" />
            </button>
          </article>
        ))}

        {cartProducts.length > 0 && (
          <div className="mx-4">
            <button className="flex place-content-center items-center bg-orange-primary w-full h-12 font-bold rounded-md text-white hover:bg-orange-300 transition-all">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
