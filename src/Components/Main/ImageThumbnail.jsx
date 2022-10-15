const ImageThumbnail = ({ name, index, i }) => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={name}
        alt=""
        className=" rounded-2xl hidden md:block cursor-pointer"
      />
      <span
        className={`absolute cursor-pointer top-0 h-full w-full rounded-2xl hidden md:block hover:bg-[rgba(255,255,255,0.7)] 
        ${i === index && "bg-[rgba(255,255,255,0.7)]"}`}
      ></span>
    </div>
  );
};

export default ImageThumbnail;
