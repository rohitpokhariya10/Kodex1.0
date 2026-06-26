import api from "../../../lib/api";

export const createLink = async (data, token) => {
    //Syntax : axios.post(url, data, config)
  const response = await api.post(
    "/links/",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};