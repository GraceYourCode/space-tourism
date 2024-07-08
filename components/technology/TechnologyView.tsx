import NavBar from "../NavBar";
import TechnologyBody from "./TechnologyBody";
import background from "@/public/assets/technology/background-technology-mobile.jpg";

const TechnologyView = () => {
  return (
    <div>
      <NavBar image={background} />
      <TechnologyBody />
    </div>
  );
};

export default TechnologyView;
