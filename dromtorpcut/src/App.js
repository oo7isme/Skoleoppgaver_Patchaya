import "./CSS/App.css";
import Header from "./components/header.js";
import BasicDateCalendar from "./components/calendar";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Content />
      </div>
      {/* <div className="calendar">
        <BasicDateCalendar />
      </div> */}
    </div>
  );
}

export default App;
