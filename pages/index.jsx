import { Grid, Stack } from "@mui/material";
import Dashboard from "../components/dashboard/Dashboard";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import NavBar from "../components/NavBar";
import useSwr from "swr";
import { getBlogPosts } from "../helpers/api/getBlogPosts";
import { getExtensions } from "../helpers/api/getExtensions";
import { getPersonalInfo } from "../helpers/api/getPersonalInfo";
import { makeStyles } from "@mui/styles";

export default function Home({ blogs, extensions }) {
  const url = "/admin/me";
  const { data } = useSwr(url, getPersonalInfo);
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0}>
        <Grid className={classes.sideBar} item xs={1} sm={2} md={2.2}>
          <LeftSideBar />
        </Grid>
        <Grid className={classes.main} item xs={11} sm={10} md={9.8}>
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

const useStyles = makeStyles((theme) => ({
  sideBar: {
    position: "fixed",
  },
  main: {
    marginLeft: "auto",
  },
}));

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
