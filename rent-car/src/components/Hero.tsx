import CustomButton from "./CustomButton";

const Hero = () => {
  const scrollTo = () => {
    const element = document.getElementById("catalogue");

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h1>
        <p className="hero__subtitle text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
          molestias, numquam velit adipisci corporis esse iste. Placeat veniam
          fugiat error!
        </p>

        <CustomButton
          title="Arabaları Keşfet"
          designs="bg-primary-blue text-white rounded-full mt-10 transition hover:bg-blue-800"
          handleClick={scrollTo}
        />
      </div>
      <div className="w-100 flex  justify-center">
        <img src="/hero.png" alt="" className="img-fluid object-contain" />
      </div>
    </div>
  );
};

export default Hero;
