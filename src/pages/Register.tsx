import styled from "styled-components";
import { Desc } from "../components/shared_styled_elements";
import { Button } from "../components/shared_styled_elements";

const Container = styled.div``;
const Title = styled.h1``;
const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Input placeholder=" Confirm  Password" />
          <Desc>By creating an account. I consent to all the terms and condtions of the organization</Desc>
          <Button  bgcolor="#191970" fontcolor="white" bordercolor="white">Create an Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
