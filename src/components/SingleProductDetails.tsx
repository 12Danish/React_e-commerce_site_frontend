import styled from "styled-components";
// This wraps around all the product details
const Container = styled.div``;
// This wrapper wraps around the Image and all the descriptions for the product
const Wrapper = styled.div``;
// This wraps around the image
const ImageWrapper = styled.div``;
// This is acrtuallyt the Image element
const Image = styled.img``;
// This wraps around all of the information
const InfoWrapper = styled.div``;
// This describes the title
const Title = styled.h1``;
// This eleemenyt is the description for the product
const Desc = styled.h3``;

const SingleProductDetails = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image></Image>
        </ImageWrapper>
        <InfoWrapper>
          <Title></Title>
          <Desc></Desc>
        </InfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default SingleProductDetails;
