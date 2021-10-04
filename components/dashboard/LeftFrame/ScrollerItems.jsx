import { makeStyles } from "@mui/styles";
import ScrollerItem from "./Scrollertem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { extensionsListe } from "../../../utils/ExtensionScrolliste";

export default function ScrollerItems() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "6px",
    variableWidth: true,
  };
  return (
    <>
      <Slider {...settings}>
        {extensionsListe.map((item, idx) => (
          <ScrollerItem
            idx={idx}
            img={item.img}
            desc={item.desc}
            style={{ width: "170px" }}
          />
        ))}
      </Slider>
    </>
  );
}

const useStyles = makeStyles((theme) => ({}));