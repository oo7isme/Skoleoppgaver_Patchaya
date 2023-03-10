import "./CSS/App.css";
import Header from "./components/header.js";
import BasicDateCalendar from "./components/calendar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="calendar">
        <BasicDateCalendar />
      </div>
    </div>
  );
}

export default App;
