import { Avatar, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Headphones } from "react-feather";
import CardLayout from "../../Reusable/Cards";
import SupportBody from "../../Reusable/Cards/CardBody/SupportBody";
import CardHeader from "../../Reusable/Cards/CardHeader";
export default function SupportClient() {
  const title = "Customer support";
  return (
    <>
      <CardLayout heightMin={"190px"}>
        <CardHeader title={title} icon={<Headphones size={24} />} />
        <SupportBody />
      </CardLayout>
    </>
  );
}
