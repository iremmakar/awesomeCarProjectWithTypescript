import { useState } from "react";
import { ICarProps } from "../../types";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModel from "./DetailModel";

import { motion } from "framer-motion";

interface ICarCardProps {
  car: ICarProps;
}

const Card = ({ car }: ICarCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>

      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">₺</span>

        {Math.round(Math.random() * 2000)}

        <span className="self-end text-[14px] font-medium">/gün</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <img src="/hero.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative flex w-full">
        <div className="mt-2 group-hover:invisible w-full flex justify-between text-gray">
          <CarInfo
            title={car.transmission === "a" ? "Otomatik" : "Manuel"}
            icon="/steering-wheel.svg"
          />
          <CarInfo
            title={car.drive?.toUpperCase()}
            icon="/steering-wheel.svg"
          />

          <CarInfo title={car.city_mpg + "MPG"} icon="/steering-wheel.svg" />
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Daha Fazla"
            designs="w-full py-[16px] rounded-full bg-primary-blue text-white hover:bg-blue-800"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <DetailModel
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </motion.div>
  );
};

export default Card;
