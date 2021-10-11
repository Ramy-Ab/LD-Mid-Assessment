import CardLayout from "../../Reusable/Cards";
import VisitorBody from "../../Reusable/Cards/CardBody/VisitorBody";
import CardFooter from "../../Reusable/Cards/CardFooter";
import CardHeader from "../../Reusable/Cards/CardHeader";
import Spinner from "../../Reusable/Spinner";

export default function VisitorCard({ visitor, shopInfo, error }) {
  return (
    <>
      <CardLayout>
        <CardHeader />
        {!visitor && !error && <Spinner />}
        {visitor && !error && <VisitorBody />}
        <CardFooter />
      </CardLayout>
    </>
  );
}
