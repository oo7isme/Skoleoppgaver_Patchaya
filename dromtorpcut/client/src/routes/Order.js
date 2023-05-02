import Header from "../components/Header";
import * as React from "react";
import HorizontalLabelPositionBelowStepper from "../components/Progress";
import "../CSS/Order.css";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const nav = useNavigate();
  const handleSelectHaircut = (cut) => {
    const Haircut = cut;
    nav("/step2", { state: { Haircut } });
  };
  return (
    <div className="main-content">
      <Header />
      <HorizontalLabelPositionBelowStepper pageStep={0} />
      <div className="services">
        <div
          id="skinFade"
          className="service"
          onClick={() => handleSelectHaircut("Skin fade")}
        >
          <img src="https://cdn.discordapp.com/attachments/1096342039735574532/1100861066805792819/caesar-cut-with-skin-fade.jpg"></img>
          <p>Skin fade</p>
        </div>
        <div
          id="mensCut"
          className="service"
          onClick={() => handleSelectHaircut("Men's Haircut")}
        >
          <img src="https://cdn.discordapp.com/attachments/1096342039735574532/1100862297750126703/tp-mens-fade-haircut.jpg"></img>
          <p>Men's Haircut</p>
        </div>
        <div
          id="comboDeluxe"
          className="service"
          onClick={() => handleSelectHaircut("Combo Deluxe")}
        >
          <img src="https://cdn.discordapp.com/attachments/1096342039735574532/1100869371921977404/43bf6d0b44e846908a44f56a4878b5-premium-barber-shop-inc-ewan-koria-1c661fec2ef94b7e87d139b9a062b0-booksy.jpeg"></img>
          <p>Combo Deluxe</p>
        </div>
        <div
          id="dameKlipp"
          className="service"
          onClick={() => handleSelectHaircut("Dameklipp")}
        >
          <img src="https://cdn.discordapp.com/attachments/1096342039735574532/1100869813712199801/564f625e-2203-4520-9a48-02884a08584a.jpg"></img>
          <p>Dameklipp</p>
        </div>
        <div
          id="beardTrimming"
          className="service"
          onClick={() => handleSelectHaircut("Beard Trimming")}
        >
          <img src="https://cdn.discordapp.com/attachments/1096342039735574532/1100865832361398283/beard-trim-from-barber-900x444.jpg"></img>
          <p>Beard Trimming</p>
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => nav("/")}>Back</button>
        <button onClick={() => handleSelectHaircut("")}>Order</button>
      </div>
    </div>
  );
}
