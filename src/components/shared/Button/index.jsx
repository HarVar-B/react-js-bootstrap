import React from 'react'
import styled from 'styled-components'
const SButton = styled.button`

  width: fit-content;
  height: 40px;

  cursor: pointer;
  border: none;
  color: #121213;
  background-color: ${p=>p.color ? p.color : `#FFCA20EE`} ;
  font-size: 14px;
  font-weight: 600;
  
  
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  
  :hover {
    background-color: #FFCA2080;
  }
  :focus:active {
    background-color: #FFCA2080;
    box-shadow: #FFCA20A0 0 0 0 6px;
    outline: none;
}
  :focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
  }
  
  :disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

const Button = props => <SButton {...props}>{props.children}</SButton>
export default Button
