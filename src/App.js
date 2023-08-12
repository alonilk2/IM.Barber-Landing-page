import "./App.scss";
import WhatsIncluded from "./components/WhatsIncluded";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Lessons from "./components/Lessons";
import FourthSection from "./components/FourthSection";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

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
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Header />
        <Introduction />
        <Lessons />
        <FourthSection />
        <Contact />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
