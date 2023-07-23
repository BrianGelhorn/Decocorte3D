import {styled} from 'styled-components';

//Default style for all the footer container.
export const StyledFooter = styled.footer`
background-color: black;
display: flex;
`;

//Column to contain the elements based on columns with the flex.
export const Column = styled.section`
text-align: center;
flex: 1 0 0;
`;

export const SubTitle = styled.h2`
color: white;
display: inline-block;
position: relative;`;

export const Info = styled.p`
width: 100%;
color: white;
font-size: 14px;
`;