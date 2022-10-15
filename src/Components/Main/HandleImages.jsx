import { useState } from "react";
import MainImages from "./MainImages";

const HandleImages = ({ ARRAY_IMG, ARRAY_IMG_THUMB }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleClickModal = () => {
    if (window.innerWidth > 768) {
      return setIsOpenModal(!isOpenModal);
    }
  };
  return (
    <>
      <MainImages
        ARRAY_IMG={ARRAY_IMG}
        ARRAY_IMG_THUMB={ARRAY_IMG_THUMB}
        className="grid grid-cols-1 md:grid-cols-4 md:gap-6 md:max-w-[450px] cursor-pointer"
        handleClickModal={handleClickModal}
      />
      {isOpenModal && (
        <>
          <MainImages
            ARRAY_IMG={ARRAY_IMG}
            ARRAY_IMG_THUMB={ARRAY_IMG_THUMB}
            className="hidden md:grid md:absolute md:z-10 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:grid-cols-4 md:gap-6 md:max-w-[500px] cursor-pointer"
            isOpenModal={isOpenModal}
            handleClickModal={handleClickModal}
          />
          <span
            className="fixed bg-black/50 backdrop-blur-sm top-0 left-0 w-full h-full"
            onClick={handleClickModal}
          ></span>
        </>
      )}
    </>
  );
};

export default HandleImages;
