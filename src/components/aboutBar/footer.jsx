import React from "react";
import { StyledFooter, SubTitle, Column, Info } from "./footerstyles";

const Footer = () => {
  return (
    <StyledFooter>
      <Column>
        <SubTitle>Contacto </SubTitle>
        <Info>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate itaque ipsum sint obcaecati nemo mollitia, consectetur ex, fuga magnam repellat asperiores. Vel voluptates, praesentium rem blanditiis adipisci cumque hic dolorem.</Info>    
      </Column>
      <Column>
        <SubTitle>lorem</SubTitle>
        <Info>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quaerat nesciunt explicabo porro sapiente qui sunt hic iure numquam rem illo possimus quasi unde et, nobis doloribus quam id? Voluptatem!</Info>
      </Column>
    </StyledFooter>
  );
};

export default Footer;
