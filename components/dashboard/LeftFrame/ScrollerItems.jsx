import { makeStyles } from "@mui/styles";
import ScrollerItem from "./Scrollertem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ScrollerItems({ extensions }) {
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
        {extensions.new.map((item, idx) => (
          <ScrollerItem
            key={idx}
            id={item.id}
            img={item.logo_url}
            desc={item.code}
            style={{ width: "170px" }}
          />
        ))}
      </Slider>
    </>
  );
}

const useStyles = makeStyles((theme) => ({}));
