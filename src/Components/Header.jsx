import LogoSneakers from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "./icons/MenuIcon";
import CartIcon from "./icons/CartIcon";
import CloseIcon from "./icons/CloseIcon";

const Header = () => {
  const handleOpenMenu = () => {
    const menu = document.querySelector("nav");
    menu.classList.remove("hidden");
  };

  const handleCloseMenu = () => {
    const menu = document.querySelector("nav");
    menu.classList.add("hidden");
  };
  return (
    <header className="mx-auto flex items-center gap-4 px-8 py-4 md:container">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img src={LogoSneakers} alt="Logo Sneakers" className="mr-auto md:mr-3" />
      <nav className="text-bold  absolute top-0 left-0 flex h-full w-3/5 flex-col gap-6 bg-white px-8 font-bold md:relative md:mb-1 md:mt-1 md:mr-auto md:flex md:flex-row md:gap-8 md:text-sm md:font-light md:text-gray-600">
        <button className="my-8 md:hidden" onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <a href="#">Collection</a>
        <a href="#">Men</a>
        <a href="#">Woman</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-9">
        <button>
          <CartIcon />
        </button>
        <img src={Avatar} alt="" className="w-10 backdrop-grayscale" />
      </div>
    </header>
  );
};

export default Header;
