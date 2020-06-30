import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ProductItem = (props) => {
  const { id, productName, image, price, inventory } = props.info;

  const add = (itemId) => {};
  return (
    <div>
      <Card>
        <CardImg
          top
          style={{ width: "100%" }}
          src={image && image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{productName}</CardTitle>
          <CardSubtitle>price: {price} €</CardSubtitle>
          <CardText></CardText>
          <Button onClick={add(id)} disabled={inventory === 0}>
            {inventory > 0 ? "Add to cart" : "Sold out"}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductItem;
