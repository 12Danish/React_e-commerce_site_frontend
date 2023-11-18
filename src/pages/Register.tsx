import styled from "styled-components";
import {
  Desc,
  Button,
  FormWrapper,
  Title,
  Input,
  
} from "../components/shared_styled_elements";

// This is the top most level container
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  // Using this to create a thin white layer on top of the image
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("src/assets/images/bgpic_resgister.jpg") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Styling for the form
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0px 20px 0px;
  width: 100%;
  overflow: hidden;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

`;

// Styling for the wrapper around the Desc
export const TermsWrapper = styled.div`
  margin: 20px;
`;

const Register = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Input placeholder=" Confirm  Password" />
          <TermsWrapper>
            <Desc>
              By creating an account. I consent to all the terms and condtions
              of the organization
            </Desc>
          </TermsWrapper>
          <ButtonWrapper>
            <Button
              width="100%"
              bgcolor="#191970"
              fontcolor="white"
              bordercolor="white"
            >
              CREATE ACCOUNT
            </Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
