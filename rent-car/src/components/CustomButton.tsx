import { IButtonProp } from "../types";

const CustomButton = ({
  title,
  designs,
  handleClick,
  btnType,
  rIcon,
}: IButtonProp) => {
  return (
    <button
      className={`custom-btn ${designs}`}
      onClick={handleClick}
      type={btnType || "button"}
    >
      <span className="flex-1">{title}</span>
      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
