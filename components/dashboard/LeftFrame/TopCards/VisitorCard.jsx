import { Eye } from "react-feather";
import CardLayout from "../../../Reusable/Cards";
import VisitorBody from "../../../Reusable/Cards/CardBody/VisitorBody";
import CardFooter from "../../../Reusable/Cards/CardFooter";
import CardHeader from "../../../Reusable/Cards/CardHeader";
import Spinner from "../../../Reusable/Spinner";

export default function VisitorCard({ visitor, shopInfo, error }) {
  const title = "Visitors";
  const periode = "This month";
  const footer = "Do you want more visits?contact us!";
  return (
    <>
      <CardLayout>
        <CardHeader
          title={title}
          rightSubTitle={periode}
          icon={<Eye size={24} />}
        />
        {!visitor && !error && <Spinner />}
        {visitor && !error && <VisitorBody visitor={visitor} />}
        <CardFooter footer={footer} />
      </CardLayout>
    </>
  );
}
