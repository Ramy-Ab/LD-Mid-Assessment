import { Grid, Stack } from "@mui/material";
import Dashboard from "../components/dashboard/Dashboard";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import NavBar from "../components/NavBar";
import useSwr from "swr";
import { getBlogPosts } from "../helpers/api/getBlogPosts";
import { getExtensions } from "../helpers/api/getExtensions";
import { getPersonalInfo } from "../helpers/api/getPersonalInfo";

export default function Home({ blogs, extensions }) {
  const url = "/admin/me";
  const { data } = useSwr(url, getPersonalInfo);
  console.log("meee : ", data);
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={1} md={2.2}>
          <LeftSideBar />
        </Grid>
        <Grid item xs={11} md={9.8}>
          <Stack>
            {data && <NavBar unseen_news={data.unseen_news} />}
            {data && (
              <Dashboard
                blogs={blogs}
                extensions={extensions}
                fullName={data.fullname}
              />
            )}
          </Stack>
        </Grid>
      </Grid>
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
