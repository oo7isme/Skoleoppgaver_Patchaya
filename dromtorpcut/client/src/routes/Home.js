import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const nav = useNavigate();
  return (
    <div className="main-content">
      <div className="logo">
        <p id="dromtorp">Drømtorp</p>
        <p id="cut">Cut</p>
      </div>
      <img src="https://cdn.discordapp.com/attachments/1096342039735574532/1096343277097209937/logoimg.png" />
      <button onClick={() => nav("/step1")}>BOOK NOW!</button>
    </div>
  );
}
