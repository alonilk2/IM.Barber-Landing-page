import "./App.scss";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Lessons from "./components/Lessons";
import FourthSection from "./components/FourthSection";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useRef } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1e1e1e",
      paper: "#1e1e1e",
    }
  },
});

function App() {
  const contactRef = useRef(null)

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Header contactRef={contactRef} />
        <Introduction />
        <Lessons />
        <Contact ref={contactRef} />
        <FourthSection />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
