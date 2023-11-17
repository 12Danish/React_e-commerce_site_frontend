import styled from "styled-components";

interface BoldHeadingProps {
  fontColor: string;
}
// Exporting this as I am using this within the footer and navbar
export const BoldHeading = styled.h1<BoldHeadingProps>`
  font-weight: bold;
  font-size: 35px;
  color: ${(props) => props.fontColor};
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

// Defining the properties of the header. I have exported this here as I am using the same component within ProductList anf Categories and NewsLetter
export const Header = styled.div`
  margin-top: 10px;
  height: 80px;
  width: 100%;
  background-color: #191970;
  color: #f8f8ff;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

// Exporting this as this can be used in Product.tsx and Navbar.tsx
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e2eef3;
    transform: scale(1.1);
  }
`;
// This takes in the parameters for defining the buttons
interface ButtonProps {
  bgcolor: string;
  fontcolor: string;
  bordercolor: string;
}
//  It controls the properties of the Button
export const Button = styled.button<ButtonProps>`
  height: 40px;
  width: auto;
  padding: 10px;
  border: solid;
  border-width: 1px;
  border-color: ${(props) => props.bordercolor};
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  font-weight: 800;
  letter-spacing: 2px;
  &:hover {
    transform: scale(1.1);
  }
`;

// This eleement is being used in SingleProductDetails and within Reviews
export const Desc = styled.p`
  margin-top: 10px;
  font-style: italic;
  font-weight: 700;
`;

// This is the tag for the name of the person with all the needed styling.This is being used in ExistingReviws and AddReviews
export const Name = styled.h1`
  font-size: 20px;

  font-weight: 700;
  margin-bottom: 5px;
`;
// This wraps around all the starsThis is being used in ExistingReviws and AddReviews
export const StarsWrapper = styled.span``;
