import styled from "styled-components";
import { Name } from "./shared_styled_elements";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
// This is the top most level element
const Container = styled.div`
  padding: 10px;
  background-color: #e2eef3;
  height: 100%;
  display: flex;
  margin-top: 20px;
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
const StarsWrapper = styled.span`
  flex: 0.5;
`;

// This wraps around the Reviews Section
const ReviewWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const AddReview = () => {
  const [currentFilledStars, setCurrentFilledStars] = useState(0);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  // This function is displaying the unfilled stars at the beginning
  const displayStars = () => {
    {/* Creating an array of undefined objects of length 5 */}
    const starsArray = Array.from({ length: 5 });
    return starsArray.map((_, index) => (
      // mapping each index to a starIcon which has been imported
      <StarIcon
        key={index}
        /* If the hoverValue is greater than Index of the current star on which the cursor is 
           it will not even check the value for currentFilledStars even if it is greater than 
           that.This is how when we hover on a star behind. The stars only get high;ighted to
           the hover point at that moment. Besides this if the condition is false for hoverValue
           > 0 that is when we are not on the stars then and only then will the currentFilledStars > 0
           will be evaluated and then we'll see the stars we have selected  */
        sx={{
          color:( hoverValue || currentFilledStars) > index ? "#e0c00b" : "grey",
          cursor: "pointer",
        }}
        onClick={() => handleClick(index + 1)}
        // When we hover on
        onMouseOver = {() => handleHover(index + 1)}
        // When we hover off
        onMouseLeave = {handleMouseLeave}
        
      />
    ));
  };
  // This function is handling the event when the user clicks the stars
  const handleClick = (value: number) => {
    setCurrentFilledStars(value);
  };

  // This function handles when the cursor hovers over the stars
  const handleHover = (value: number) => {
    setHoverValue(value);
  };
 // This function handles what happens when we hover away
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <Container>
      {/* Name Section */}
      <NameWrapper>
        <Name>Your Name:</Name>
        <NameBox />
      </NameWrapper>
      {/* Stars Section */}
      <StarsWrapper>{displayStars()}</StarsWrapper>
      {/* Review Box Section */}
      <ReviewWrapper>
        <Name>Your Review:</Name>
        <ReviewBox />
      </ReviewWrapper>
    </Container>
  );
};

export default AddReview;
