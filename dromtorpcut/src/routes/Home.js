import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const nav = useNavigate();
  return (
    <div className="main-content">
      <Header />
      <div className="services">
        <h1>Services</h1>
        <div id="skinFade" className="service">
          <p>Skin Fade</p>
        </div>
        <div id="mensCut" className="service">
          <p>Men's Haircut</p>
        </div>
        <div id="comboDeluxe" className="service">
          <p>Combo Deluxe</p>
        </div>
        <div id="dameKlipp" className="service">
          <p>Dameklipp</p>
        </div>
        <div id="beardTrimming" className="service">
          <p>Beard Trimming</p>
        </div>
      </div>
      <div className="footer">
        <button onClick={() => nav("/bestill")}>BOOK HERE</button>
      </div>
    </div>
  );
}
