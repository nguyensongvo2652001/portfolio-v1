import { useState } from "react";
import classes from "./NormalImagesCarousel.module.css";
import Reveal from "../../Reveal/Reveal";
import ImageOverlay from "../ImageOverlay/ImageOverlay";

const NormalImagesCarousel = (props) => {
  const { images } = props;

  const [displayImages, setDisplayImages] = useState(images);
  const [showImageOverlay, setShowImageOverlay] = useState(false);
  const [clickedImage, setClickedImage] = useState(undefined);

  const nextImage = () => {
    setDisplayImages((currentDisplayImages) => {
      const newDisplayImages = currentDisplayImages.slice(1);
      const firstImage = currentDisplayImages[0];
      newDisplayImages.push(firstImage);
      return newDisplayImages;
    });
  };

  const prevImage = () => {
    setDisplayImages((currentDisplayImages) => {
      const newDisplayImages = currentDisplayImages.slice(
        0,
        currentDisplayImages.length - 1
      );
      const lastImage = currentDisplayImages[currentDisplayImages.length - 1];
      newDisplayImages.unshift(lastImage);
      return newDisplayImages;
    });
  };

  const clickImageHandler = (image) => {
    setClickedImage(image);
    setShowImageOverlay(true);
  };

  const closeImageOverlay = () => {
    setShowImageOverlay(false);
  };

  return (
    <div className={classes.normalImagesCarousel__container}>
      {showImageOverlay && (
        <ImageOverlay image={clickedImage} closeModal={closeImageOverlay} />
      )}
      <div
        className={classes.normalImagesCarousel__prevIconContainer}
        onClick={prevImage}
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <ul className={classes.normalImagesCarousel}>
        {displayImages.map((image, index) => {
          return (
            <li
              className={classes.normalImagesCarousel__imageContainer}
              key={index}
            >
              <img
                src={image}
                alt=""
                onClick={() => {
                  clickImageHandler(image);
                }}
              />
            </li>
          );
        })}
      </ul>
      <div
        className={classes.normalImagesCarousel__nextIconContainer}
        onClick={nextImage}
      >
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
    </div>
  );
};

export default NormalImagesCarousel;
