import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {Menu, MenuOptions, MenuAnimator, MenuButton} from './menusliderstyles';

//Variants for animate when the Menu is open or not.
const variants = {
  open: {width: '60vw', opacity: 1 },
  closed: { width: 0, opacity: 0},
};

const MenuSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuButton
        className="menuButton"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        children={<MenuIcon sx={{ margin: 0 }} fontSize="large" />}
      ></MenuButton>
      <MenuAnimator
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <Menu>
          {["🏠 Inicio", "🛒 Productos", "🙋‍♂️ Nosotros", "📞 Contacto"].map(
            (item, index) => (
              <MenuOptions key={index}>{item}</MenuOptions>
            )
          )}
        </Menu>
      </MenuAnimator>
    </>
  );
};

export default MenuSlider;
