import { useEffect, useRef, useState } from "react";

import ImageThumbnail from "./ImageThumbnail";

import PrevIcon from "@/Components/icons/PrevIcon.jsx";
import NextIcon from "@/Components/icons/NextIcon.jsx";
import CloseIcon from "@/Components/icons/CloseIcon.jsx";

const MainImages = ({
  ARRAY_IMG = [],
  ARRAY_IMG_THUMB = [],
  isOpenModal = false,
  handleClickModal = null,
  ...props
}) => {
  const [index, setIndex] = useState(0);
  const sliderBtn = useRef(null);

  useEffect(() => {
    if (isOpenModal) {
      return sliderBtn.current.classList.remove("md:hidden");
    }
  }, [isOpenModal]);

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
    <section {...props}>
      {isOpenModal && (
        <button
          className="md:col-span-4 justify-self-end"
          onClick={handleClickModal}
        >
          <CloseIcon fill={"#fff"} />
        </button>
      )}

      <div className="col-start-1 col-end-5 relative w-full">
        <img
          src={ARRAY_IMG[index]}
          alt=""
          className=" md:rounded-2xl object-cover max-h-[50vh] w-screen md:w-full md:max-h-[500px] md:max-w-[500px]"
          onClick={handleClickModal}
        />
        <div
          ref={sliderBtn}
          className="absolute md:hidden top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-3"
        >
          <button
            className=" bg-white w-10 h-10 rounded-full flex justify-center items-center"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className=" bg-white w-10 h-10 rounded-full flex justify-center items-center"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {ARRAY_IMG_THUMB.map((images, i) => (
        <div
          onClick={() => {
            setIndex(i);
          }}
          key={images}
        >
          <ImageThumbnail name={images} index={index} i={i} />
        </div>
      ))}
    </section>
  );
};

export default MainImages;
