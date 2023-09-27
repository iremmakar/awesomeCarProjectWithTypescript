type SearchButtonProps = {
  styling: string;
};

const SearchButton = ({ styling }: SearchButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" alt="" width={40} height={40} />
    </button>
  );
};

export default SearchButton;
