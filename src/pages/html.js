import { Helmet } from "react-helmet-async";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import MainComponent from "../components/MainComponent";

const Html = () => {
  return (
    <>
    <Helmet>
      <title>HTML Page</title>
    </Helmet>
      <Header></Header>

      <MainComponent pageTitle="HTML Page" />
      <Footer></Footer>
    </>
  );
};

export default Html;
