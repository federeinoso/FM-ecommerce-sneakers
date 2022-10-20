import HandleImages from "./HandleImages";
import MainDetail from "./MainDetail";

import img1 from "@/assets/images/image-product-1.jpg";
import img2 from "@/assets/images/image-product-2.jpg";
import img3 from "@/assets/images/image-product-3.jpg";
import img4 from "@/assets/images/image-product-4.jpg";
import imgThumb1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgThumb2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgThumb3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgThumb4 from "@/assets/images/image-product-4-thumbnail.jpg";

const ARRAY_IMG = [img1, img2, img3, img4];
const ARRAY_IMG_THUMB = [imgThumb1, imgThumb2, imgThumb3, imgThumb4];

const objectProduct = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  subtitle: "Sneaker Company",
  price: 250.0,
  discount: 0.5,
  imagesMain: ARRAY_IMG,
  imagesThumb: ARRAY_IMG_THUMB,
};

const Main = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4 md:pb-0 md:place-items-center md:mx-auto items-center md:container md:px-[6.4vw] md:h-[calc(100%-89px)]">
      <HandleImages
        ARRAY_IMG={objectProduct.imagesMain}
        ARRAY_IMG_THUMB={objectProduct.imagesThumb}
      />
      <MainDetail objectProduct={objectProduct} />
    </main>
  );
};

export default Main;
