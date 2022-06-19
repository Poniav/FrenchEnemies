import React from "react";
import styled from "styled-components";
import Header from "../components/header";

interface WrapperProps {
  children: React.ReactNode;
}
const Menu = styled.div``;
const Footer = styled.div``;

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
