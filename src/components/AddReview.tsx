import styled from "styled-components";
import { StarsWrapper } from "./shared_styled_elements";
import { Name } from "./shared_styled_elements";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
// This is the top most level element
const Container = styled.div`
  padding: 10px;
  background-color: #e2eef3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// This wraps around the Name Section
const NameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
`;

// This is the input box for the review that the user writes
const ReviewBox = styled.textarea`
  resize: none;
  background-color: white;
  border-color: #cfcfcf;
  padding: 5px;
  border-width: 1px;
  border-radius: 2%;
  height: 100%;
  width: 100%;
  font-weight: 700;
  vertical-align: top;
`;
// This is the input box for the name the user enters
const NameBox = styled.input`
  background-color: white;
  border-color: #cfcfcf;
  padding: 5px;
  border-width: 1px;
  border-radius: 2%;
  height: 25px;
  width: 150px;
  font-weight: 700;
`;

// This wraps around the Reviews Section
const ReviewWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const AddReview = () => {
  const [displayFilledStars, setDisplayFilledStars] = useState(0);
  return (
    <Container>
      {/* Name Section */}
      <NameWrapper>
        <Name>Your Name:</Name>
        <NameBox />
      </NameWrapper>
      {/* Stars Section */}
      <StarsWrapper></StarsWrapper>
      {/* Review Box Section */}
      <ReviewWrapper>
        <Name>Your Review:</Name>
        <ReviewBox />
      </ReviewWrapper>
    </Container>
  );
};

export default AddReview;
