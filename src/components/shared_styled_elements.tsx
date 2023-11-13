import styled from "styled-components";

// Exporting this as I am using this within the footer and navbar 
export const Logo = styled.h1`
  font-weight: bold;
  font-size: 35px;
  @media only screen and (max-width: 480px) {
    font-size: 25px;
  }
`;

// Defining the properties of the header 'Categories'. I have exported this here as I am using the same component within ProductList anf Categories and NewsLetter
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
