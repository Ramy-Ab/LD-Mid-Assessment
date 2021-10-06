import Dashboard from "../components/dashboard/Dashboard";
import useSwr from "swr";
import { getBlogPosts } from "../helpers/api/getBlogPosts";
import { getExtensions } from "../helpers/api/getExtensions";

export default function Home({ blogs, extensions }) {
  return (
    <>
      {blogs && extensions && (
        <Dashboard blogs={blogs} extensions={extensions} />
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const blogs = await getBlogPosts();
  const extensions = await getExtensions();
  return {
    props: {
      blogs,
      extensions,
    },
  };
};
