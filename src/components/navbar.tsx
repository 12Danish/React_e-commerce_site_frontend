//This file defines the navbar component and elements within it. It provides the layout for them and styling

//Importing this to use styled components
import styled from "styled-components";
//Importing the menu Icon
import MenuIcon from "@mui/icons-material/Menu";
// Importing Searh Icon
import SearchIcon from "@mui/icons-material/Search";
// Importing badges
import Badge from "@mui/material/Badge";
//Importing shopping cart Icon
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//Importing the wrapper for icons
import { Icon } from "./shared_styled_elements";
// importing this from the shared_styled_elements file
import { BoldHeading } from "./shared_styled_elements";
// importing this function which will help in determining whether screen size
// This is the top most level container for the navbar
const Container = styled.div`
  height: 60px;
  background-color: #f8f8ff;

  @media only screen and (max-width: 480px) {
    height: auto;
    overflow: hidden;
  }
`;
// ***Placed inside CONTAINER component *** The wrapper is inside <Component> and provides padding and sets display to flexbox for displaying children elements horizontally
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// *** Placed inside WRAPPER component *** Wrapping the elements on the left under this div element container and specifying its styling
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
`;

// ***Placed Inside LEFT component *** Specifying style properties for the search box
const SearchContainer = styled.div`
  border: 2px solid #191970;
  display: flex;
  flex: 0.8;
  border-radius: 8px;
  align-items: center;
  padding: 3px;
  margin-left: 20px;
`;
// *** This is placed inside the SEARCH_CONTAINER component*** This specifies the properties of the input field
const InputField = styled.input`
  border: none;
  flex: 1;
`;
// *** Placed inside WRAPPER component ***  Wrapping the elements in the center under this div element container and specifying its styling
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

// *** Placed inside WRAPPER component ***  Wrapping the elements on the right under this div element container and specifying its styling
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    justify-content: flex-end;
  }
`;

const NavbarOptions = styled.div`
  cursor: pointer;
  font-size: 20px;
`;
// This is the main functional component which is returned in the end
const Navbar = () => {
  const screenSize = window.screen.width <= 480 ? true : false;
  return (
    //The top most element
    <Container>
      <Wrapper>
        {/*The left component has the search field within it*/}
        <Left>
          <Icon>
            <MenuIcon sx={{ color: "#191970", cursor: "pointer" }} />
          </Icon>
          {/* The search container has the input field and the search icon imported from mui */}
          {!screenSize && (
            <SearchContainer>
              <InputField />
              <SearchIcon sx={{ color: "gray", cursor: "pointer" }} />
            </SearchContainer>
          )}
        </Left>

        {/*The center component has the Company Name within it*/}
        <Center>
          <BoldHeading fontcolor="black">Company Name </BoldHeading>
        </Center>

        {/*The right component has different options within it*/}
        <Right>
          {!screenSize && <NavbarOptions>Become a Seller</NavbarOptions>}
          {!screenSize && <NavbarOptions>Sign Up</NavbarOptions>}
          {!screenSize && <NavbarOptions>Login</NavbarOptions>}
          <Icon>
            <Badge
              badgeContent={2}
              sx={{ color: "#191970", cursor: "pointer" }}
            >
              <ShoppingCartIcon />
            </Badge>
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
