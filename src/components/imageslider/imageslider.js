import React, { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import Images from '../../media'
import './imageslider.css'
import { useInView } from "react-intersection-observer";

const ImageSlider = () =>{
    return(
        <div>
            <ul className="imageList">
                {Images.map((item, index) =>(
                    <li
                    className={`images`}>
                    <motion.img src={item} 
                    initial={{x: '100vw'}}
                    animate={{x: '-80vh'}} 
                    transition={{duration: 2, repeat: Infinity, ease: "linear"}}>
                    </motion.img>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ImageSlider;