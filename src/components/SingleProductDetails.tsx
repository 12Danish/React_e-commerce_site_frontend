import styled from "styled-components";
import { Button } from "./shared_styled_elements";
import { Desc } from "./shared_styled_elements";
import { reviewsData } from "../assets/data";
import ExistingReview from "./ExistingReview";
import AddReview from "./AddReview";
import { BoldHeading } from "./shared_styled_elements";
// This wraps around all the product details
const Container = styled.div`
  display: flex;
  height: 200vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
// This wrapper wraps around the Image and all the descriptions for the product
const ImageAndInfoWrapper = styled.div`
  flex: 1;
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
  border-color: #191970;
`;
// This describes the title
const Title = styled.h1`
  font-size: 70px;
`;

//This eleemnt styled the price
const Price = styled.span`
  font-size: 40px;
  color: red;
`;
// This wraps around the whole counter
const CounterWrapper = styled.div`
  height: 20px;
  width: 60px;
  margin-bottom: 10px;
`;
// This is the input field
const NumberInput = styled.input`
  height: 100%;
  width: 100%;
  border: solid;
  border-width: 1px;
  padding: 5px;
  text-align: center;
  font-weight: 700;
`;
// This is the wrapper for the buttons
const ButtonWrapper = styled.div`
  display: flex;
  width: 50%;
  margin-top: 60px;
  justify-content: space-between;
`;
// This wraps around both of the reviews section
const AllReviewsWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background-color: #f8f8ff;
`;
// This is the wrapper for all the reviews
const ExistingReviewsWrapper = styled.div`
  flex: 1;
  padding: 7px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

//This is the wrapper for adding a new review
const NewReviewWrapper = styled.div`
  flex: 1;
  padding: 7px;
  display: flex;
  flex-direction: column;
  overflow: hidden ;
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
      <ImageAndInfoWrapper>
        {/*This wraps around the image  */}
        <ImageWrapper>
          <Image src={product.img} />
        </ImageWrapper>
        {/*This wraps around all of the information */}
        <InfoWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
          <Desc>{product.desc}</Desc>
          {/* This wraps around the counter */}
          <CounterWrapper>
            <Desc>Quantity</Desc>
            {/*This is the input field */}
            <NumberInput
              type="number"
              inputMode="numeric"
              pattern="[1-9]*"
              defaultValue="1"
              placeholder="1"
              min="1"
              max="50"
            />
          </CounterWrapper>
          {/*This wrapper contains both of the two buttons */}
          <ButtonWrapper>
            <Button bgcolor="#191970" fontcolor="white" bordercolor="white">
              ADD TO CART
            </Button>
            <Button bgcolor="#e2eef3" fontcolor="#191970" bordercolor="#191970">
              BUY NOW
            </Button>
          </ButtonWrapper>
        </InfoWrapper>
      </ImageAndInfoWrapper>
      {/*This is the wrapper for all the reviews posted by different users */}
      <AllReviewsWrapper>
        {/*This condition first checks if the reviews exist then checks if the length is greater than zero
      if the conditions are true then the element is displayed */}
        {reviewsData && reviewsData.length > 0 && (
          <ExistingReviewsWrapper>
            <BoldHeading fontColor="#191970">Reviews By Customers</BoldHeading>
            {/* Mapping each data entry to a review component defined seprately*/}
            {reviewsData.map((review) => (
              <ExistingReview data={review} key={review.id} />
            ))}
            <Button bgcolor="#191970" fontcolor="white" bordercolor="white">
              Load More
            </Button>
          </ExistingReviewsWrapper>
        )}
        <NewReviewWrapper>
          <BoldHeading fontColor="#191970">
            Have You Tried This Product? Leave A Review.
          </BoldHeading>
          <AddReview />
          <Button bgcolor="#191970" fontcolor="white" bordercolor="white">
            Post Review
          </Button>
        </NewReviewWrapper>
      </AllReviewsWrapper>
    </Container>
  );
};

export default SingleProductDetails;
