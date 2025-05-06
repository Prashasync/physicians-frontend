import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import './imagePlaceholder.css';

const ImagePlaceholder = () => {
  return (
    <div className="image-placeholder">
      <AiOutlineClose className="image" />
    </div>
  );
};

export default ImagePlaceholder;