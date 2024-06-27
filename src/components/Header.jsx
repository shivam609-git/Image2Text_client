import React from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const Logo = styled.span`
  font-size: 24px;
  margin-left:5px;
  font-weight: bold;
  margin-right: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.2s ease;

  &:hover {
    color: #ccc;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper className='nav'>
      <Logo>Assignment</Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/login">Sign IN</NavLink>
        <NavLink href="https://wa.me/917838705087" target="_blank">Contact</NavLink>
        <a href="mailto:sdsharma609@gmail.com">Email</a>
        
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;