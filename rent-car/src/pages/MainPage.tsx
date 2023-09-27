import { useEffect } from "react";
import Hero from "../components/Hero";
import { fetchCars } from "../utils";

import { ICarProps } from "../types";

import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import CustomFilter from "../components/CustomFilter";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../components/ShowMore";
import { fuels, years } from "../constants";

interface Error {
  error?: string;
}

const MainPage = () => {
  const [cars, setCars] = useState<ICarProps[]>([]);

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj).then((res: ICarProps[]) => setCars(res));
  }, [params]);

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  const limit = Number(params.get("limit")) || 5;

  return (
    <div className="pt-40">
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Üretim Yılı" options={years} />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            Üzgünüz herhangi bir sonuç bulunamadı
          </div>
        ) : (
          <>
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car, i) => (
                  <Card car={car} key={i} />
                ))}
              </div>

              <ShowMore limit={limit} isNext={limit < 30} />
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
