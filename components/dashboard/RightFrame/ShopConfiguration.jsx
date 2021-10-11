import { Tool } from "react-feather";
import { useInfo } from "../../../contexts/InfoContext";
import CardLayout from "../../Reusable/Cards";
import ConigureShopBody from "../../Reusable/Cards/CardBody/ConigureShopBody";
import CardFooter from "../../Reusable/Cards/CardFooter";
import CardHeader from "../../Reusable/Cards/CardHeader";

export default function ShopConfiguration() {
  const info = useInfo();
  const data = info?.data;
  const error = info?.error;
  const title = "Configure your shop";
  const footer = "Complete the setup!";
  return (
    <>
      <CardLayout>
        <CardHeader title={title} icon={<Tool size={24} />} />
        <ConigureShopBody data={data} error={error} />
        <CardFooter footer={footer} />
      </CardLayout>
    </>
  );
}
