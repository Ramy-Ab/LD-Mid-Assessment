import { vetrina } from "../helpers/axiosInstances";

export const getBlogPosts = async () => {
  var error;
  try {
    var { data } = await vetrina.get("/blog-posts");
  } catch (e) {
    error = e.response.data;
  }
  return { blogs: data, errorBlogs: error };
};
