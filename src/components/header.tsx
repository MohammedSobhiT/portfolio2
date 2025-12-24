export const Header = () => {
  return (
    <header className="flex justify-between items-start  py-3 px-6 md:px-12  bg-transparent z-9999  fixed w-full text-[#131313d4]">
      <div className="flex  w-2/3  ">
        <p className="font-bold text-8xl">
          <span className="block">code.</span>
          <span className="block">Design.</span>
          <span className="block">Experience.</span>
        </p>
        <div className="flex gap-6 justify-between items-center h-fit mt-3 -ml-24 bg-[#d9d9d9d9] px-2 py-1  rounded ">
          <a href="#" className="text-sm ">
            We’re a creative
          </a>
          <span className="self-end text-sm">&#8599;</span>
        </div>
      </div>
      <nav className="flex space-x-4 font-medium text-lg">
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="#">Career</a>
      </nav>
      <a href="#" className="font-medium text-lg">
        Contact &#8599;
      </a>
    </header>
  );
};
