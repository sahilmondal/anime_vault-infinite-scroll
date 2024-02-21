import Image from "next/image";

function Hero() {
  return (
    <header className="   mx-auto sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10 relative items-center">
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%] my-12">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center ">
        <Image
          src="/naruto.png"
          alt="anime"
          fill
          className="object-contain z-50"
        />
        <div className=" bg-red-400 blur-3xl w-[30vw] h-[30vw]  rounded-full absolute opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {" "}
        </div>
      </div>
    </header>
  );
}

export default Hero;
