import { Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item md={2.2}>
          <LeftSideBar />
        </Grid>
        <Grid item md={9.8}>
          <NavBar />
        </Grid>
      </Grid>
    </>
  );
}
