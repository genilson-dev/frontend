import Form from "./components/form";
import { getCookieServer } from "@/lib/cookieServer";
import { api } from "@/service/api";


export default async function Product() {
  const token = await getCookieServer();
  const response = await api.get("/list/category", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // console.log(response.data);

  return <Form categories={response.data} />;
}
