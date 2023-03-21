import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const nav = useNavigate;
  return (
    <div className="main-content">
      <Header />
      <p>Skin fade in</p>
      <p>Buzzz</p>
      <div className="footer">
        <button onClick={() => nav("/login")}>Next</button>
      </div>
    </div>
  );
}
