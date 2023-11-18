import styled from "styled-components";
import { Title, Button } from "./shared_styled_elements";
import CartProduct from "./CartProduct";
import { cartItems } from "../assets/data";
import { useEffect, useState } from "react";

//This contains the central body for the cart
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30vh;
  height: auto;
  margin-bottom: 50px;
`;
// This contains the buttons
const TopOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  padding: 5px;
  max-height: 55px;
  overflow: hidden;
  position: relative;
  background-color: #e2eef3;
`;

// This wraps around the title

const TitleWrapper = styled.div`
  position: absolute;
  left: 50%; /* Move to the horizontal center */
  transform: translateX(-50%); /* Adjust to center */
  top: 0;
  bottom: 0;
`;

// This is the lower part which contains the main body for the cart
const LowerBody = styled.div`
  margin-top: 7px;
  flex: 3;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;
// This is the part which has all the relevant information for all products of the cart
const Info = styled.div`
  flex: 3;
`;
// This is the part which has the Summary for the price
const Summary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-width: 2px;
  min-height: 430px;
  max-height: 450px;
  padding: 20px;
  border-color: black;
  @media only screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;

const SummaryPerLine = styled.div`
  margin-top: 5px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

// This is the styling for the normal text
const SummaryInfoText = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-right: 5px;
`;
interface PriceValueProps {
  fontSize: string;
  color: string;
}
const PriceValue = styled.h1<PriceValueProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: 600;
  color: ${(props) => props.color};
`;

// This is the main component being returned
const CartBody = () => {
  // This will store the condtion whther the deliver price is being taken or not. True => Being taken
  const [deliveryCheck, setDeliveryCheck] = useState(true);
  // This is the total final value
  const [taxedTotalPrice, setTaxedTotalPrice] = useState(0);
  // Setting the value for delivery charges
  const deliveryCharges = 500;

  // Calculting the 15 percent tax value
  const calculateTaxValue = () => {
    let totalPrice = calculateTotalPrice();
    return 0.15 * totalPrice;
  };
  // Calculating the total price of all the products in the cart
  const calculateTotalPrice = () => {
    // The reduce function goes over each entry of the array and sums the totalprice i.e the price * quantity for each product
    let totalPrice = cartItems.reduce(
      (total, item) => total + item.totalprice,
      0 // The total is initialised with zero
    );
    return totalPrice;
  };
  useEffect(() => {
    // Adding the tax value to the total value of the products
    let taxedTotalPrice = calculateTotalPrice() + calculateTaxValue();
    // if the total value is greater than 10000 then setting the DeliveryCheck to false as delivery charges are not being added
    if (taxedTotalPrice >= 10000) {
      setDeliveryCheck(false);
      setTaxedTotalPrice(taxedTotalPrice);
    } else {
      // If the condition is false then applying delivery charges and returning
      setDeliveryCheck(true);
      taxedTotalPrice = taxedTotalPrice + deliveryCharges;
      setTaxedTotalPrice(taxedTotalPrice);
    }
  }, []);

  return (
    <Container>
      {/*Top options contain the two buttons  */}
      <TopOptions>
        <Button
          width="auto"
          bgcolor="#e2eef3"
          fontcolor="#191970"
          bordercolor="#191970"
        >
          Back
        </Button>
        <TitleWrapper>
          <Title> Cart</Title>
        </TitleWrapper>
      </TopOptions>

      {/*If the cart is non-empty then this is displayed */}
      {cartItems.length > 0 && (
        <LowerBody>
          <Info>
            {cartItems.map((item) => (
              <CartProduct key={item.id} item={item} />
            ))}
          </Info>
          <Summary>
            {/* This is the title  */}
            <Title>Order Summary</Title>

            {/*Total Price before any addition */}
            <SummaryPerLine>
              {/* Displaying the type of price  */}
              <SummaryInfoText>Total Price before tax :</SummaryInfoText>
              {/* Calling the function to display the price before any additions */}
              <PriceValue fontSize="20px" color="black">
                {calculateTotalPrice()}RS
              </PriceValue>
            </SummaryPerLine>

            {/* Calculating the tax value */}
            <SummaryPerLine>
              <SummaryInfoText>Tax Value(15%) :</SummaryInfoText>
              <PriceValue fontSize="20px" color="black">
                {calculateTaxValue()}RS
              </PriceValue>
            </SummaryPerLine>

            {/* Calculating the delivery fee */}
            <SummaryPerLine>
              <SummaryInfoText>Delivery Fee :</SummaryInfoText>
              <PriceValue fontSize="20px" color="black">
                {deliveryCheck ? "500Rs" : "Free Delivery"}
              </PriceValue>
            </SummaryPerLine>

            {/* Displaying the total checkout price */}
            <SummaryPerLine>
              <SummaryInfoText>Net Price :</SummaryInfoText>
            </SummaryPerLine>

            {/* Displaying the calculated checkout price */}
            <SummaryPerLine>
              <PriceValue color="red" fontSize="30px">
                {taxedTotalPrice}RS
              </PriceValue>
            </SummaryPerLine>

            {/* Displaying the Checkout Button */}
            <SummaryPerLine>
              <Button
                width="100%"
                bgcolor="#191970"
                fontcolor="white"
                bordercolor="white"
              >
                Proceed To Checkout
              </Button>
            </SummaryPerLine>
          </Summary>
        </LowerBody>
      )}
      {/*If the cart is empty then this is displayed */}
      {cartItems.length == 0 && (
        <LowerBody>
          <Title>Your Cart Is Empty</Title>
        </LowerBody>
      )}
    </Container>
  );
};

export default CartBody;
