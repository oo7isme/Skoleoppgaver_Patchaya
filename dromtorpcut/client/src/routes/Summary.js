import "../CSS/Home.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import HorizontalLabelPositionBelowStepper from "../components/Progress";
export default function Summary() {
  const nav = useNavigate();
  return (
    <div className="main-content">
      <Header />
      <HorizontalLabelPositionBelowStepper pageStep={2} />
      Du har nå bestilt time hos DrømtorpCut.
    </div>
  );
}
