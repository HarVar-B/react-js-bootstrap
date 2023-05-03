import React                 from "react";
import FormControl           from "@mui/material/FormControl";
import styled, { keyframes } from "styled-components";
import { Link }              from "react-router-dom";

export const Container = styled.div`
  padding: 10px 0 40px 20px;
  position: relative;
  min-height: calc(100vh - 145px);
  height: fit-content;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 4;

  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const loadingAnimationKeyframes = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }`;

const LoaderSpinner = styled.div`

  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  :after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: ${loadingAnimationKeyframes} 1.2s infinite;
  }
`;

export const SContainer = ({ isLoading = false, children, loadingText = "loading..." }) => {
  return <Container>
    {isLoading ? <LoadingOverlay>
      <LoaderSpinner />
      <p>{loadingText}</p>
    </LoadingOverlay> : null}
    {children}
  </Container>;
};

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  padding-right: 20px;

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  width: 500px;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 15%) 5px 5px 20px 5px;
  margin: 0;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #000;

  :hover, :active, :focus, :focus-visible {
    box-shadow: #FFCA2050 5px 5px 20px 5px;
  }

  overflow: hidden;
`;

export const Heading1 = styled.h1`
  margin: auto 0;
`;

export const FormGroup = styled(FormControl)`
  align-items: baseline;
  padding: 10px;

  label {
    margin-right: 20px;
  }
`;

export const FormContainer = styled.form``;

export const ButtonSection = styled.div`
  width: 30%;

  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;

  button {
    padding: 5px 10px;
    margin: 0 10px;
  }
`;

export const InlineFlexBox = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

export const SimpleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`


export const DetailEntry = styled.div`
  display: flex;
  margin: 15px 0;
`;
export const DetailKey = styled.p`
  width: fit-content;
  font-weight: 600;
  margin: unset;
`;
export const DetailValue = styled.p`
  margin: 0 8px;
`;

export const AbsolutelyPlacedBox = styled.div`
  width: max-content;
  position: absolute;
  background-color: white;
  
  padding: 4px;
  border-radius: 4px;
  z-index: 1;

  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px,
  rgba(0, 0, 0, 0.22) 0 10px 10px;
`;
