import { ICarProps } from "../../types";

interface IDetailProps {
  isOpen: boolean;
  closeModel: () => void;
  car: ICarProps;
}

const DetailModel = ({ isOpen, closeModel, car }: IDetailProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-4">
          <div className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto">
            <button
              onClick={closeModel}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="" />
            </button>

            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img src="/hero.png" className="h-full mx-auto" alt="" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src="/hero.png"
                    alt=""
                    className="h-full mx-auto object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src="/hero.png"
                    alt=""
                    className="h-full mx-auto object-contain"
                  />
                </div>
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                  <img
                    src="/hero.png"
                    alt=""
                    className="h-full mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {Object.entries(car).map(([key, value]) => (
              <div className="flex justify-between">
                <h4 className="capitalize">{key.split("_").join(" ")}</h4>
                <p className="text-black-100 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModel;
