type CarInfoProps = {
  icon: string;
  title: string;
};

const CarInfo = ({ icon, title }: CarInfoProps) => {
  return (
    <div>
      <img src={icon} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default CarInfo;
