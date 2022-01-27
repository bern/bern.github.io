import React from "react";
import styled from "styled-components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  padding: 0px 15%;
  margin-top: 78px;
`;
