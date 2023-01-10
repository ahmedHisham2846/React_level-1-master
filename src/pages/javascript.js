import { Helmet } from "react-helmet-async";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import MainComponent from "../components/MainComponent";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JavaScript Page</title>
      </Helmet>
      <Header></Header>

      <MainComponent pageTitle="Java Script Page" />
      <Footer />
    </>
  );
};

export default Javascript;
