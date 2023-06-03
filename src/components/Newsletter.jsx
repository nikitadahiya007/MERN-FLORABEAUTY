import { Send } from "@material-ui/icons";
import styled from "styled-components";
const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #faf3ed;
`;
const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 70px;
  margin: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  flex: 9;
  border: none;
  padding: 20px;
`;

const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
