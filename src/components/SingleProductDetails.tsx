import styled from "styled-components";
// This wraps around all the product details
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;
// This wrapper wraps around the Image and all the descriptions for the product
const Wrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
`;
// This wraps around the image
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
// This is acrtuallyt the Image element
const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;
// This wraps around all of the information
const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  border: solid;
  border-width: 1px;
  border-color: grey;
`;
// This describes the title
const Title = styled.h1`
  font-size: 70px;
`;
// This eleemenyt is the description for the product
const Desc = styled.p`
  margin: 20px 0px;
`;
//This eleemnt styled the price
const Price = styled.span`
  font-size: 40px;
  color: red;
`;

// These are the arguments this component accepts in order to dynamically render the data given to it
interface SingleProductDetailsProps {
  product: {
    id: number;
    img: string;
    title: string;
    price: string;
    desc: string;
  };
}
const SingleProductDetails = ({ product }: SingleProductDetailsProps) => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={product.img} />
        </ImageWrapper>
        <InfoWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
          <Desc>{product.desc}</Desc>
        </InfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default SingleProductDetails;
