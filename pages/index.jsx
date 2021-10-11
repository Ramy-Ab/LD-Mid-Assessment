import Dashboard from "../components/dashboard/Dashboard";
import { InfoProvider } from "../contexts/InfoContext";
import { fetcher } from "../api/fetcher";

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
  const blogsUrl = "/blog-posts";
  const extensionsUrl = "/admin/store-features?shop_id=3105";
  const blogResult = await fetcher(blogsUrl);
  const extensionsResult = await fetcher(extensionsUrl);
  const blogs = blogResult.data;
  const errorBlogs = blogResult.error;
  const extensions = extensionsResult.data;
  const errorExtensions = extensionsResult.error;
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
