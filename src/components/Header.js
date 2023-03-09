import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify-icon/react";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.jpg" />
      <Menu>
        <a>
          <img src="/images/home.png" />
          <span> Home</span>
        </a>
        <a>
          <img src="/images/team.png" />
          <span> Teams</span>
        </a>
      </Menu>

      <UserImage src="/images/profile.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: 
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Logo = styled.img`
  width: 60px;
  border-radius: 10px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    img {
      height: 20px;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;


      &:after {
        content: "";
        height: 2px;
        background: black;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &: hover {
        span:after {
          transform: scale(1);
          opacity: 1;
        }
  }
`;

const UserImage = styled.img`
  width: 40px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
