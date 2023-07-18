import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Images from "../../media";
import "./imageslider.css";
import { IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

const ImageSlider = () => {
  const [curImage, setCurImage] = useState(Images[0]);
  //We create a function that returns the next image depending if its going to the left or not
  const changeIndex = (Left) => {
    if (Left) {
      if (Images.indexOf(curImage) - 1 >= 0) {
        setCurImage(Images[Images.indexOf(curImage) - 1]);
      } else {
        setCurImage(Images[Images.length - 1]);
      }
    } else {
      if (Images.indexOf(curImage) + 1 <= Images.length - 1) {
        setCurImage(Images[Images.indexOf(curImage) + 1]);
      } else {
        setCurImage(Images[0]);
      }
    }
  };
  return (
    <div className="imageContainer">
      <div className="buttonSliders">
        <IconButton
          sx={{ marginRight: "auto", position: "relative" }}
          children={<ArrowBackIosNewIcon></ArrowBackIosNewIcon>}
          onClick={() => changeIndex(true)}
        ></IconButton>
        <IconButton
          sx={{ marginLeft: "auto", position: "relative" }}
          children={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
          onClick={() => changeIndex(false)}
        ></IconButton>
      </div>
      <AnimatePresence mode="sync">
        <motion.img
          key={curImage ? curImage : "empty"}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0,  position: 'absolute'}}
          transition={{ duration: 0.7 }}
          className={"image"}
          src={curImage}
        >
        </motion.img>
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
