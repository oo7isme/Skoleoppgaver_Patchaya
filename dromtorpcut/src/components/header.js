import "../CSS/header.css";
import MenuIcon from "@mui/icons-material/Menu";

function header() {
  return (
    <div className="header">
      <p>DrømtorpCut</p>
      <MenuIcon className="menu" color="white" fontSize="large" />
    </div>
  );
}

export default header;
