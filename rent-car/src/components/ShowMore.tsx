import { useSearchParams } from "react-router-dom";
import CustomButton from "./CustomButton";

type ShowMoreProps = {
  limit: number;
  isNext: Boolean;
};

const ShowMore = ({ limit, isNext }: ShowMoreProps) => {
  const [params, setParams] = useSearchParams();

  const handleNavigate = () => {
    // yeni limiti hesapla
    const newLimit: number = limit + 5;

    //  diğer parametreli silmeden yenisini ekler
    params.set("limit", String(newLimit));

    // url'i güncelle
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {isNext && (
        <CustomButton
          title="Daha Fazla"
          designs="bg-primary-blue rounded-full "
          handleClick={handleNavigate}
        />
      )}
    </div>
  );
};

export default ShowMore;
