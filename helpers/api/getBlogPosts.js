import { vetrina } from "../axiosInstances";

export const getBlogPosts = async () => {
  try {
    const { data } = await vetrina.get("/blog-posts");
    return data;
  } catch (e) {
    console.log(e);
  }
};
