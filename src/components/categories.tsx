import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categoriesInfo } from "../data";
// The top most level wrapper
const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
// Defining the properties of the header 'Categories'. I have exported this here as I am using the same component within ProductList
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

// This will contain all the categories
const AllCategoriesWrapper = styled.div`
  background-color: #e2eef3;
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

// The main component which is returned
const Categories = () => {
  return (
    <Container>
      {/* Wrapping the Header */}
      <Header>Categories</Header>
      {/* This component wraps around all the categories  */}
      <AllCategoriesWrapper>
        {/* Getting Data from categoriesInfo and mapping it to individual items */}
        {categoriesInfo.map((item) => (
          // Calling the Categoryitem component to get the individual styled category items
          <CategoryItem item={item} key={item.id} />
        ))}
      </AllCategoriesWrapper>
    </Container>
  );
};

export default Categories;
