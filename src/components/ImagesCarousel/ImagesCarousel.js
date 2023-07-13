import classes from "./ImagesCarousel.module.css";
import NormalImagesCarousel from "./NormalImagesCarousel/NormalImagesCarousel";
import Reveal from "../Reveal/Reveal";

const ImagesCarousel = (props) => {
  const { images } = props;

  return (
    <>
      <Reveal>
        <NormalImagesCarousel images={images} />
      </Reveal>
    </>
  );
};

export default ImagesCarousel;
