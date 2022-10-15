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

const Main = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4 md:place-items-center md:mx-auto items-center md:container md:px-[6.4vw] md:py-10 ">
      <HandleImages ARRAY_IMG={ARRAY_IMG} ARRAY_IMG_THUMB={ARRAY_IMG_THUMB} />
      <MainDetail />
    </main>
  );
};

export default Main;
