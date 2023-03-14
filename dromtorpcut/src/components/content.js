import "../CSS/content.css";

function Content() {
  return (
    <div className="features">
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
          Skin Fade
        </div>
        <div id="mensCut" className="service">
          Men's Haircut
        </div>
        <div id="comboDeluxe" className="service">
          Combo Deluxe
        </div>
        <div id="dameKlipp" className="service">
          Dameklipp
        </div>
        <div id="beardTrimming" className="service">
          Beard Trimming
        </div>
      </div>
    </div>
  );
}

export default Content;
