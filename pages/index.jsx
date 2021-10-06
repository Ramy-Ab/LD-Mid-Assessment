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
  const { blogs, errorBlogs } = await getBlogPosts();
  const { extensions, errorExtensions } = await getExtensions();
  if (errorBlogs || !blogs) {
    return { notFound: true };
  }
  if (errorExtensions || !extensions) {
    return { notFound: true };
  }
  return {
    props: {
      blogs,
      extensions,
    },
    revalidate: 3600,
  };
};
