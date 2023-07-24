import React from 'react';
import { Card, ProductImage, ProductName, ProductPrice } from './productcardstyles';
import Images from "../../../../media";

function ProductCard() {
    return (
        <Card>
            <ProductImage src={Images[1]}></ProductImage>
            <ProductName>Mate Groot</ProductName>
            <ProductPrice>$2500</ProductPrice>
        </Card>
    );
}

export default ProductCard;