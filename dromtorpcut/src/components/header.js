import "../CSS/header.css";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <div className="header">
      <p>DrømtorpCut</p>
      <MenuIcon className="menu" color="white" fontSize="large" />
    </div>
  );
}
