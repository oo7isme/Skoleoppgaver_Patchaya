import "../CSS/Summary.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import HorizontalLabelPositionBelowStepper from "../components/Progress";
import { useLocation } from "react-router-dom";

export default function Summary() {
  const nav = useNavigate();
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="main-content">
      <Header />
      <HorizontalLabelPositionBelowStepper pageStep={2} />
      <div id="summary">
        <p id="mainTxt">You have now booked an appointment with DrømtorpCut.</p>
        <div id="info">
          <p>Your service: {data.cut}</p>
          <p>Your name: {data.name}</p>
          <p>Your Email: {data.email}</p>
          <p>Your Appointment: {data.date}</p>
          <p>Check you email for more information</p>
        </div>
      </div>
      <button
        id="doneBtn"
        onClick={() => {
          nav("/");
        }}
      >
        Done
      </button>
    </div>
  );
}
