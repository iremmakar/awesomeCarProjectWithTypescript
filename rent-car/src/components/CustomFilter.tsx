import { IOption } from "../types";

import Select from "react-select";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface IFilterProps {
  title: string;
  options: IOption[];
}

const CustomFilter = ({ title, options }: IFilterProps) => {
  const [selected, setSelected] = useState<IOption | null>();

  const [params, setParams] = useSearchParams();

  const key = title === "Yakıt Tipi" ? "fuel" : "year";

  useEffect(() => {
    if (selected?.value) {
      params.set(key, selected.value.toLocaleLowerCase());
    } else {
      params.delete(key);
    }

    setParams(params);
  }, [selected]);

  return (
    <div>
      <Select
        placeholder={title}
        className="text-black min-w-[100px]"
        onChange={(e: IOption | null) => setSelected(e)}
        options={options}
      />
    </div>
  );
};

export default CustomFilter;
