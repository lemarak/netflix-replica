import "./index.css";
import TitleSection from "./TitleSection";
import Carousel from "./Carousel";

const Section = (props) => {
  return (
    <div className="section">
      <TitleSection category={props.category} />
      <Carousel images={props.images} />
    </div>
  );
};

export default Section;
