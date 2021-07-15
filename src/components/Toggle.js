import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { ReactComponent as SunIcon } from "../icons/sun.svg";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  const ToggleContainer = styled.button`
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    justify-content: space-between;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 8rem;
    margin-top: 2rem;
    top: 0;
    align-self: start;

    svg {
      height: auto;
      width: 2.5rem;
      transition: all 0.5s linear;

      // sun icon
      &:first-child {
        transform: ${() => (isLight ? "translateY(0)" : "translateY(100px)")};
      }

      // moon icon
      &:nth-child(2) {
        transform: ${() => (isLight ? "translateY(-100px)" : "translateY(0)")};
        color: #eee;
      }
    }
  `;

  return (
    <ToggleContainer onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
