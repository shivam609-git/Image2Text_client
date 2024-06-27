 import React from 'react'
 import styled from 'styled-components';
 
 const FooterWrapper = styled.footer`
  background-color: #d3cfdf;
  color: #black;
  padding: 7px;
  text-align: center;
  border:2px solid;
  margin-top:auto;
  position:absolute;
left:0;
bottom:0;
right:0;
`;

 const Footer = () => {
   return (
   <FooterWrapper>
    Name : Shivam 
    <br/>
    Contact : sdsharma609@gmail.com
   </FooterWrapper>
   )
 }
 
 export default Footer