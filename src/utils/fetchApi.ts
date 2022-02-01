import axios from "axios";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "6b951905dcmsh6bb43c98cee317ap15f27fjsnf56d2ea94987",
    },
  });

  return data;
};
