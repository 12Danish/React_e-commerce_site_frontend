import styled from "styled-components";
import { Header } from "./Categories";
import Product from "./Product";
import { productsInfo } from "../data";
import Pagination from "@mui/material/Pagination";
// This is the top most level container
const Container = styled.div`
  height: auto;
  width: 100%;
`;
// This wraps around all the products along with their images
const AllProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;
// Wraps around the pagination
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// This is the main componet which is returned
const ProductList = () => {
  return (
    <Container>
      {/*Importing the header from ProductList.tsx and using it to display the banner */}
      <Header>Popular Products</Header>
      {/* This componet has all the products */}
      <AllProductsContainer>
        {productsInfo.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </AllProductsContainer>
      {/* This componet wraps around pagination row */}
      <PaginationWrapper>
        <Pagination count={10} variant="outlined" color="primary" size="large"/>
      </PaginationWrapper>
    </Container>
  );
};

export default ProductList;
