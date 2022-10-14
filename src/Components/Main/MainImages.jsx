import { useEffect, useState } from "react";

import img1 from "@/assets/images/image-product-1.jpg";
import img2 from "@/assets/images/image-product-2.jpg";
import img3 from "@/assets/images/image-product-3.jpg";
import img4 from "@/assets/images/image-product-4.jpg";
import imgThumb1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgThumb2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgThumb3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgThumb4 from "@/assets/images/image-product-4-thumbnail.jpg";
import ImageThumbnail from "./ImageThumbnail";

import PrevIcon from "@/Components/icons/PrevIcon.jsx";
import NextIcon from "@/Components/icons/NextIcon.jsx";

const ARRAY_IMG = [img1, img2, img3, img4];

const MainImages = () => {
  const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) {
      return setIndex(3);
    }
    setIndex(index - 1);
  };
  const handleClickNext = () => {
    if (index === ARRAY_IMG.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 md:gap-6 md:max-w-[500px]">
      <div className="col-start-1 col-end-5 relative w-full ">
        <img
          src={ARRAY_IMG[index]}
          alt=""
          className=" md:rounded-2xl object-cover max-h-[50vh] w-screen md:w-full md:max-h-[500px] md:max-w-[500px]"
        />
        <div className="absolute md:hidden top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-3">
          <button
            className=" bg-white w-10 h-10 rounded-full grid place-items-center"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className=" bg-white w-10 h-10 rounded-full grid place-items-center"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <ImageThumbnail name={imgThumb1} />
      <ImageThumbnail name={imgThumb2} />
      <ImageThumbnail name={imgThumb3} />
      <ImageThumbnail name={imgThumb4} />
    </section>
  );
};

export default MainImages;
