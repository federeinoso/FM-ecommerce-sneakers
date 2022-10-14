const NavLink = (props) => {
  return (
    <a href="#" className="md:py-8 mt-1 relative group mr-4">
      <span className="group-hover:text-black">{props.name}</span>
      <span className="cursor-pointer absolute scale-x-0 transition-all duration-200 group-hover:scale-x-100 h-[4px] w-full bottom-0 left-0 group-hover:bg-orange-primary"></span>
    </a>
  );
};

export default NavLink;
