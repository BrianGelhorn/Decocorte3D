import { motion } from "framer-motion";
import styled from "styled-components";
import { IconButton, List, ListItem } from "@mui/material";

//Here I create all the components already styled.
export const Menu = styled(List)`
  height: 100vh;
  position: absolute;
  background-color: white;
  padding-top: 50px !important;
  overflow-x: hidden;
`;
export const MenuOptions = styled(ListItem)`
  border-bottom: 1px solid;
  border-color: #eceff1;
  padding: 16px !important;
  width: 100%;
  white-space: nowrap;
`;
export const MenuAnimator = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
`;
export const MenuButton = styled(IconButton)`
  padding: 0;
  z-index: 1;
`;

