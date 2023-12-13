import { client } from "../config/apiSetting";

export const getAllProducts = async () => {
  try {
    const res = await client.get("/product/all");
    if (res.status == 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};
