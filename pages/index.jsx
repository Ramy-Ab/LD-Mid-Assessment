import { Grid, Stack } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Dashboard from "../components/dashboard/Dashboard";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={1} md={2.2}>
          <LeftSideBar />
        </Grid>
        <Grid item xs={11} md={9.8}>
          <Stack>
            <NavBar />
            <Dashboard />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
