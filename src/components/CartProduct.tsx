import styled from "styled-components";
import { Desc } from "./shared_styled_elements";
import { Add, Remove } from "@mui/icons-material";
// This wraps around each product
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 5px;
  @media only screen and (max-width: 480px) {
    width: 100vw;
  }
`;
// This has the Product Image and the Product Details
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
// These are within the the Product Details element
const Image = styled.img`
  width: 200px;
`;
// These are the details of the product besides the image
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
// This is a seprate element for prdice besides the prdoduct detail element
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// This wraps around the Quantity of items section
const QuantityWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
`;
// Special styling for the price text
const Pricetext = styled.h1`
  color: red;
  font-style: italic;
  font-weight: 700;
  margin-top: 7px;
`;

// This are the props for each product within the cart
interface CartProductProps {
  item: {
    id: number;
    img: string;
    title: string;
    price: number;
    quantity: number;
    totalprice: number;
  };
}

const CartProduct = ({ item }: CartProductProps) => {
  return (
    <Product>
      {/*This is the wrapper for the image and the details */}
      <ProductDetail>
        {/*Displaying the image entered by the user */}
        <Image src={item.img} />
        <Details>
          <Desc>
            {/*Displaying the product name  entered by the user */}
            <u>Product Name:</u> {item.title}
          </Desc>
          <Desc>
            {/*Displaying the product Id entered by the user */}
            <u>Product Id:</u> {item.id}
          </Desc>
        </Details>
      </ProductDetail>
      {/* This section includes the price and quantity details */}
      <PriceDetails>
        <QuantityWrapper>
          <Remove />
          {item.quantity}
          <Add />
        </QuantityWrapper>
        <Pricetext>Price: {item.totalprice}RS</Pricetext>
      </PriceDetails>
    </Product>
  );
};

export default CartProduct;
