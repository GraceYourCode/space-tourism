import NavBar from "../NavBar";
import CrewBody from "./CrewBody";
import background from "@/public/assets/crew/background-crew-mobile.jpg";

const CrewView = () => {
  return (
    <>
      <NavBar image={background} />
      <CrewBody />
    </>
  );
};

export default CrewView;
