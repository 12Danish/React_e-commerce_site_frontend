import styled from "styled-components";
// This wraps around the whole filter segment
const Container = styled.div`
  height: 10vh;
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: right;
  justify-content: space-between;
`;
// This wraps around the the Filter Products option
const Filter1 = styled.div`
  margin: 20px;
  @media only screen and (max-width: 480px) {
    margin: 0px;
  }
`;
// This wraps around the Sort Products Option
const Filter2 = styled.div`
  margin: 20px;
  @media only screen and (max-width: 480px) {
    margin: 0px;
  }
`;
// This is the styling for the filter tex  t
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
// This is the styling for the Drop down list
const Select = styled.select`
  padding: 10px;
  background-color: #e2eef3;
  margin: 10px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin: 0px;
    margin-top: 10px;
  }
`;
// This is the styling for each element in the drop down list
const Option = styled.option``;
const FilterContainer = () => {
  return (
    <Container>
      {/*This is the Filter Products option */}
      <Filter1>
        <FilterText>Filter Products</FilterText>
        <Select>
          <Option>Products under 10k</Option>
          <Option>Products under 20k</Option>
          <Option>Products under 30k</Option>
          <Option>Products under 40k</Option>
          <Option>Products under 50k</Option>
          <Option>Products over 50k</Option>
        </Select>
      </Filter1>
      {/*This is the Sort Products option */}
      <Filter2>
        <FilterText>Sort Products</FilterText>
        <Select>
          <Option>Price High to Low </Option>
          <Option>Price Low to High </Option>
          <Option>Date Published</Option>
        </Select>
      </Filter2>
    </Container>
  );
};

export default FilterContainer;
