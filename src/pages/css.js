import { Helmet } from "react-helmet-async";
import Header from "../components/header";
import Footer from "../components/footer";
import MainComponent from "../components/MainComponent";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
      </Helmet>
      <Header></Header>
      <MainComponent pageTitle="CSS Page" />
      <Footer></Footer>
    </>
  );
};

export default Css;
