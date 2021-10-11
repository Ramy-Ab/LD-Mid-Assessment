import { StarOutlined } from "@mui/icons-material";
import CardLayout from "../../Reusable/Cards";
import TrustpilotBody from "../../Reusable/Cards/CardBody/TrustpilotBody";
import CardFooter from "../../Reusable/Cards/CardFooter";
import CardHeader from "../../Reusable/Cards/CardHeader";

export default function Trustpilot() {
  const title = "Trustpilot";
  const footer = "Write a review on Trustpilot";
  return (
    <>
      <CardLayout bgColor={"#000032"}>
        <CardHeader
          title={title}
          whiteTitle={true}
          icon={
            <StarOutlined
              style={{ color: "#00B67A" }}
              size={24}
              iconColor={"#00B67A"}
            />
          }
        />
        <TrustpilotBody />
        <CardFooter footer={footer} color={"#00C48C"} />
      </CardLayout>
    </>
  );
}
