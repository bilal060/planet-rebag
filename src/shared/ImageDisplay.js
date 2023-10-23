import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ImageDisplay = (props) => {
  const [imageError, setImageError] = useState(false);
  const [image, setImage] = useState("");
  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    if (props?.src) {
      setImage(props?.src);
      setImageError(false);
    }
  }, [props?.src]);

  return (
    <>
      {imageError ? (
        // Render a placeholder image when there is an error loading the image
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZpPDnjQBynSxEHYXo-orWYtvNybtifvhMUdsVjEhuOFpkDYPshISj_TpITVzJullxW4&usqp=CAU"
          alt="Placeholder"
          className={props?.className || ""}
          style={props?.style || {}}
        />
      ) : (
        // Render the actual image, and attach the error handler
        <img
          src={image}
          alt={props?.alt}
          crossOrigin="anonymous"
          className={props?.className || ""}
          style={props?.style || {}}
          onError={handleImageError}
        />
      )}
    </>
  );
};

ImageDisplay.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ImageDisplay;
