import axios from "axios";

const getApi = () => {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDc3NDc2NjMsImV4cCI6MTY0NzgzNDA2Mywic3ViIjoiOWUyMzIzZjEtMGQ0MS00ZWI1LWI4NDAtMTAzMGZiZGQ2ZTdmIn0.z0nXmRnptf4d2jC2JEHm6UbbHNHz5cm9wVa-nUezi88";
  const api = axios.create({ baseURL: "https://piupiuwer.polijrinternal.com" });

  api.defaults.headers.common["Authorization"] = token;
  return api;
};

export default getApi;
