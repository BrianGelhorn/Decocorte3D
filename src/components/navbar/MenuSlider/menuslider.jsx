import React, { useState } from "react";
import { IconButton, List, ListItem, duration } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

const listSx = {
  x: "100%",
  position: "absolute",
  zIndex: 3,
  right: 0,
  top: 0,
  width: "60vw",
};

const variants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 }
};

const MenuSlider = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <IconButton
        sx={{ padding: 0, zIndex: 4 }}
        className="menuButton"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        children={<MenuIcon sx={{ margin: 0 }} fontSize="large" />}
      ></IconButton>
      <motion.div
        initial={listSx}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{duration: 0.3}}
      >
        <List sx={{height: "100vh", bgcolor: "white", paddingTop: "60px"}}>
          {["🏠 Inicio", "🛒 Productos", "🙋‍♂️ Nosotros", "📞 Contacto"].map(
            (item, index) => (
              <ListItem sx={{borderBottom: 1, borderColor: "#ECEFF1", padding: "16px"}} key={index}>{item}</ListItem>
            )
          )}
        </List>
      </motion.div>
    </div>
  );
};

export default MenuSlider;
