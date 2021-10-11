import { makeStyles } from "@mui/styles";
import { Users } from "react-feather";
import CardLayout from "../../Reusable/Cards";
import CardFooter from "../../Reusable/Cards/CardFooter";
import CardHeader from "../../Reusable/Cards/CardHeader";
import InviteFreindBody from "../../Reusable/Cards/CardBody/InviteFreindBody";
export default function InviteFreinds() {
  const title = "Invite freind";
  const footer = "Complete the setup!";
  return (
    <>
      <CardLayout>
        <CardHeader title={title} icon={<Users size={24} />} />
        <InviteFreindBody />
        <CardFooter footer={footer} />
      </CardLayout>
    </>
  );
}
