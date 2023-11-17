import { Box, Heading, Text } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Advertise from "./Components/Advertise";
import AllRoutes from "./AllRoutes/AllRoutes";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Advertise />
      <Navbar />
      <AllRoutes/>
      <Footer/>
    </>
  );
}

export default App;
