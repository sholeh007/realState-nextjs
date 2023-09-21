import axios from "axios"

export const fetchApi = async (url: string) => {
  try {
    const res = await axios.get(url, {
      headers: {
        "x-rapidapi-host": process.env.HOST,
        "x-rapidapi-key": process.env.API_KEY,
      },
    })

    if (!res.status) throw new Error("fetch failled")

    return res.data
  } catch (error) {
    return error
  }
}
