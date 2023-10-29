import styled from "styled-components";

// The top most level wrapper
const Container = styled.div`
  height: 45%;
  width: 20%;
  margin: 20px;
  position: relative;
`;
// This wraps around the image to give its properties
const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
// Defining the properties for the image
const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;
// This will wrap all the description contents
const InfoWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// Defining properties for the title
const Title = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: white;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 30px;
`;
// Defining properties for button
const Button = styled.button`
  background-color: #191970;
  padding: 10px;
  color: white;
  font-weight: bold;
`;

// Defining props for CategoryItem Component
interface CategoryItemProps {
  item: {
    id: number;
    img: string;
    title: string;
  };
}

// The main component that is returned
const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <Container>
      {/* This wraps around the image */}
      <ImageWrapper>
        {/* Displaying the image of the item in category */}
        <Image src={item.img} />
      </ImageWrapper>
      {/*This wraps around the all the information  */}
      <InfoWrapper>
        {/* Displaying the title */}
        <Title>{item.title}</Title>
        {/* Displaying the button */}
        <Button>Shop Now</Button>
      </InfoWrapper>
    </Container>
  );
};

export default CategoryItem;
