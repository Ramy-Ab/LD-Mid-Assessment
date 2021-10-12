import { Grid, Users } from "react-feather";
import CardLayout from "../../Reusable/Cards";
import CardFooter from "../../Reusable/Cards/CardFooter";
import CardHeader from "../../Reusable/Cards/CardHeader";
import ScrollerItems from "./ScrollerItems";

export default function Scroller({ extensions }) {
  const title = "Extensions Marketplace";
  const footer = "Discover all extensions";
  return (
    <>
      <CardLayout spaces={5}>
        <CardHeader title={title} icon={<Grid size={24} />} />
        <ScrollerItems extensions={extensions} xs={6} />
        <CardFooter footer={footer} />
      </CardLayout>
    </>
  );
}
