import "./App.css";
import ScrollArrow from "./components/ScrollArrow.js";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme.js";
import { useDarkMode } from "./components/useDarkMode.js";
import { GlobalStyles } from "./global.js";
import Toggle from "./components/Toggle";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Router />
        <GlobalStyles />
        <ScrollArrow />
      </ThemeProvider>
    </>
  );
};

export default App;
