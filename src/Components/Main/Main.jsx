import MainDetail from "./MainDetail";
import MainImages from "./MainImages";

const Main = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4 md:mx-auto items-center md:container  md:px-32 md:py-10 ">
      <MainImages />
      <MainDetail />
    </main>
  );
};

export default Main;
