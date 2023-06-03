import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Button, MenuItem } from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuDivider,
  // MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import ProfileModel from "./ProfileModel";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  /* border: 1px solid; */
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;

  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid grey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 0;
`;
const Input = styled.input`
  margin: 0;
  border: none;
  :focus {
    outline: none;
  }
`;

const Center = styled.div`
  /* border: 1px solid; */
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  /* border: 1px solid; */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItemm = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavBar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userdetail");
    history.push("/auth");
  };
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>FLORABEAUTY</Logo>
        </Center>
        <Right>
          <MenuItemm>
            <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItemm>
          {user ? (
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Avatar
                  cursor={"pointer"}
                  size={"sm"}
                  name={user.username}
                  src={user.i}
                  // src="https://i.ibb.co/jfhr0vQ/images.jpg"
                />
              </MenuButton>
              <MenuList>
                <ProfileModel user={user}>
                  <MenuItem>My Profile</MenuItem>
                </ProfileModel>
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                <MenuItemm>Login</MenuItemm>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/register"
              >
                <MenuItemm>Register</MenuItemm>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
