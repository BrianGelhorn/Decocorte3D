import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {Menu, MenuOptions, MenuAnimator, MenuButton} from './menusliderstyles';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

//Variants for animate when the Menu is open or not.
const variants = {
  open: {width: '60vw', opacity: 1 },
  closed: { width: 0, opacity: 0},
};
const MenuSlider = () => {
  const navigate = useNavigate();

  //Function to navigate depending the button is pressing
  function handleClick(index){
    const menuHrefs = ['/Inicio', '/Productos', '/Nosotros', '/Contacto'];
    navigate(menuHrefs[index]);
  };
  //Boolean setter for check when the menu has to be open or not. With this statement we trigger the animation
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
              <MenuOptions onClick={()=>handleClick(index)} key={index}><Button sx={{color: 'black'}}>{item}</Button></MenuOptions>
            )
          )}
        </Menu>
      </MenuAnimator>
    </>
  );
};

export default MenuSlider;
