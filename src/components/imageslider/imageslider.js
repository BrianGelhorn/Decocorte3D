import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Images from "../../media";
import "./imageslider.css";
import { IconButton } from "@mui/material";
import {motion} from 'framer-motion';

const ImageSlider = () => {
  const [curImage, setCurImage] = useState(Images[0]);
  const buttonSxR = { marginLeft: 'auto', position: "relative"};
  const buttonSxL = { marginRight: 'auto', position: "relative"};
  return (
    <div className="imageContainer">
        <div className="buttonSliders">
        <IconButton
        sx={buttonSxL}
        children={<ArrowBackIosNewIcon></ArrowBackIosNewIcon>}
      ></IconButton>
      <IconButton
        sx={buttonSxR}
        children={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
      ></IconButton>
        </div>
      <motion.img
        className={`image`}
        src={curImage}
      ></motion.img>
    </div>
  );
};

export default ImageSlider;
