import Button from "./../button/index";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";

import { CartContext } from "../../providers/cart";

import { Container, List } from "./style";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <List>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p> <Button type={type} item={item} />
            </li>
          ))}
        {type === "cart" &&
          cart.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p> <Button type={type} item={item} />
            </li>
          ))}
      </List>
    </Container>
  );
};

export default ProductList;
