import styled from "styled-components";
import { Desc } from "./shared_styled_elements";
import { Name } from "./shared_styled_elements";
import { StarsWrapper } from "./shared_styled_elements";
import StarIcon from "@mui/icons-material/Star";
// This is the top most contaiener
const Container = styled.div`
  height: 20%;
  width: 100%;
  background-color: white;
  border-color: #cfcfcf;
  padding: 5px;
  border-width: 1px;
  border-radius: 2%;
`;

// This wraps arround the comment posted by the other users
const CommentBox = styled.div``;
// This accepts props for the component
interface ExitingReviewProps {
  data: {
    id: number;
    name: string;
    stars: number;
    review: string;
  };
}
// This is the main  component which is retuened
const ExistingReview = ({ data }: ExitingReviewProps) => {
  // This function handles displaying the stars
  function handleDisplayStars(stars: number) {
    // Creating an array of undefined elements upto the length specified
    const starsArray = Array.from({ length: stars });
    // mapping each of those elements to a strar and returning them
    return starsArray.map((_, index) => (
      <StarIcon key={index} sx={{ color: "#e0c00b" }} />
    ));
  }
  return (
    <Container>
      {/*This is the tag for the name of the person with all the needed styling */}
      <Name>{data.name}</Name>
      {/*This wraps around all the stars */}
      <StarsWrapper>{handleDisplayStars(data.stars)}</StarsWrapper>
      {/*This wraps arround the comment posted by the other users */}
      <CommentBox>
        <Desc>{data.review}</Desc>
      </CommentBox>
    </Container>
  );
};

export default ExistingReview;
