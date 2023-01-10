import { Helmet } from "react-helmet-async";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import MainComponent from "../components/MainComponent";

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home page</title>
    </Helmet>
      <Header></Header>
      <MainComponent pageTitle="Home Page" />
      <Footer></Footer>
    </>
  );
};

export default Home;
