import { FormatListBulleted } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import CardLayout from "../../Reusable/Cards";
import OrderBody from "../../Reusable/Cards/CardBody/OrderBody";
import CardFooter from "../../Reusable/Cards/CardFooter";
import CardHeader from "../../Reusable/Cards/CardHeader";
import Spinner from "../../Reusable/Spinner";

export default function OrdersCard({ orders, error }) {
  const title = "orders";
  const periode = "This month";
  const footer = "10 free tips to increase your sales";
  return (
    <>
      <CardLayout>
        <CardHeader
          title={title}
          rightSubTitle={periode}
          icon={<FormatListBulleted size={24} />}
        />
        {!orders && !error && <Spinner />}
        {orders && !error && <OrderBody orders={orders} error={error} />}
        <CardFooter footer={footer} arrow={true} />
      </CardLayout>
    </>
  );
}
