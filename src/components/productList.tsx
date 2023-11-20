import styled from "styled-components";
import { Header, Title } from "./shared_styled_elements";
import Product from "./Product";
import { productsInfo } from "../assets/data";
import Pagination from "@mui/material/Pagination";
import FilterContainer from "./FilterContainer";
// This is the top most level container
const Container = styled.div`
  height: auto;
  min-height: 50vh;
  width: 100%;
`;
// This wraps around all the products along with their images
const AllProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  height: auto;
  min-height: 20vh;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 90%;
  }
`;
// Wraps around the pagination
const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ProductListProps {
  heading_name?: string;
}
// This is the main componet which is returned
const ProductList = ({
  heading_name = "Popular Products",
}: ProductListProps) => {
  return (
    <Container>
      {/*Importing the header from ProductList.tsx and using it to display the banner */}
      <Header>{heading_name}</Header>
      {/*Displaying the products if they exist else giving a message */}
      {productsInfo.length > 0 ? (
        <div>
          {/* This wil display the filter options */}
          <FilterContainer />
          {/* This componet has all the products */}
          <AllProductsContainer>
            {productsInfo.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </AllProductsContainer>
          {/* This componet wraps around pagination row */}
          <PaginationWrapper>
            <Pagination
              count={10}
              variant="outlined"
              color="primary"
              size="large"
            />
          </PaginationWrapper>
        </div>
      ) : (
        <Title>There are no products of this category to show</Title>
      )}
    </Container>
  );
};

export default ProductList;
