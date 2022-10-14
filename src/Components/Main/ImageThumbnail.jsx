const ImageThumbnail = (props) => {
  return (
    <img src={props.name} alt="" className="rounded-2xl hidden md:block" />
  );
};

export default ImageThumbnail;
