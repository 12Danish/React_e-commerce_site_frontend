import styled from "styled-components";
import {
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
    url("src/assets/images/bgpic_login.jpg") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styling for the form
export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0px 20px 0px;
  overflow: hidden;
`;

// Wraps around all the links
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

// Styling for each link
const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <FormWrapper margin="0px">
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <LinkWrapper>
            <Link>Forgot Password?</Link>
            <Link>Create an Account</Link>
          </LinkWrapper>

          <Button
            width="auto"
            bgcolor="#191970"
            fontcolor="white"
            bordercolor="white"
          >
            LOG IN
          </Button>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
