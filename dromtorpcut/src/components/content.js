import "../CSS/content.css";

function Content() {
  return (
    <div className="main-content">
      <div className="featureBox">
        <p>Services</p>
      </div>
      {/* <div className="days">
        <div id="mon" className="day">
          Mon
        </div>
        <div id="tue" className="day">
          Tirs
        </div>
        <div id="wed" className="day">
          Ons
        </div>
        <div id="thu" className="day">
          Tors
        </div>
        <div id="fri" className="day">
          Fre
        </div>
      </div> */}
      <div className="services">
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
    </div>
  );
}

export default Content;