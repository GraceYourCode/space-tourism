import NavBar from "../NavBar";
import HomeBody from "./HomeBody";
import background from "@/public/assets/home/background-home-mobile.jpg";

const HomeView = () => {
  return (
    <>
      <NavBar image={background} />
      <HomeBody />
    </>
  );
};

export default HomeView;
