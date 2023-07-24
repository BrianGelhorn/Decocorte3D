import {styled} from 'styled-components';
import { Button } from '@mui/material';


//Colors I like: #CDDC39(Green), White, #2196F3 (Blue), #FF9800 (Orange), #babdbf (Gray)
export const Card = styled.div`
border-radius: 4%;
background-color: #babdbf;
display: inline-block;
padding: 0px;
position: relative;
margin: 4px;
`;

export const ProductImage = styled.img`
width: 170px;
height: 170px;
object-fit: cover;
border-radius: 4%;
`;

export const ProductName = styled.h3`
font-size: 24px;
margin: 0;
font-weight: normal;
text-align: left;
margin-left: 8px;
margin-bottom: 6px;
`;

export const ProductPrice = styled.h4`
font-size: 20px;
margin: 0;
margin-left: 8px;
margin-bottom: 8px;
float: left;
font-weight: normal;
`;