import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    text-decoration: underline;
  }
`;
const Payment = styled.img`
  width: 300px;
  height: 70px;
  margin: 0 10px;
  border-radius: 20px;
`;
const ELink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Flora Beauty</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quae
          atque quibusdam accusamus voluptatum, voluptatem in cumque ratione
          ipsum repellat vero qui vitae, magnam ducimus mollitia est recusandae
          quia ipsa?
        </Desc>

        <SocialContainer>
          <ELink href="">
            <SocialIcon>
              <Facebook />
            </SocialIcon>
          </ELink>
          <ELink href="">
            <SocialIcon>
              <Instagram />
            </SocialIcon>
          </ELink>
          <ELink href="">
            <SocialIcon>
              <LinkedIn />
            </SocialIcon>
          </ELink>
          <ELink href="">
            <SocialIcon>
              <Twitter />
            </SocialIcon>
          </ELink>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>

          <ListItem>cart</ListItem>

          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "20px" }} /> sonipat Haryana
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "20px" }} />
          +91 1234567
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "20px" }} />
          nikita@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/856VczB/Copy-of-linkedin-banner.png" />
      </Right>
    </Container>
  );
};

export default Footer;
