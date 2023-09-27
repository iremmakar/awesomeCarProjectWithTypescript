const headers = {
  "X-RapidAPI-Key": "",
  "X-RapidAPI-Host": "",
};

interface fetchParams {
  make?: string;
  model?: string;
  limit?: string;
  year?: string;
  fuel?: string;
}

export async function fetchCars(filters: fetchParams) {
  const { make, model = "", limit = 5, year = "", fuel = "" } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    { headers }
  );

  const data = await res.json();

  return data;
}
