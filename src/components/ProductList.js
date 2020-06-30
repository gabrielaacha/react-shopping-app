import React from "react";
import ProductItem from "./ProductItem";
import { Container, Row, Col } from "reactstrap";

export default class ProductList extends React.Component {
  render() {
    let cards;
    if (this.props.filteredData.length == 0) {
      cards = this.props.data;
    } else {
      cards = this.props.filteredData;
    }
    console.log("productList prop", this.props);
    const items =
      this.props.data &&
      cards.map((item, i) => {
        return (
          <Col>
            <ProductItem key={i} info={item} />
          </Col>
        );
      });

    return (
      <Container>
        <Row xs="4" md="3">
          {items}
        </Row>
      </Container>
    );
  }
}
