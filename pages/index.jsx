import Dashboard from "../components/dashboard/Dashboard";
import useSwr from "swr";
import { getBlogPosts } from "../api/getBlogPosts";
import { getExtensions } from "../api/getExtensions";
import { InfoProvider } from "../contexts/InfoContext";

export default function Home({ blogs, extensions }) {
  return (
    <>
      {blogs && extensions && (
        <InfoProvider>
          <Dashboard blogs={blogs} extensions={extensions} />
        </InfoProvider>
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
    // revalidate: 3600,
  };
};
