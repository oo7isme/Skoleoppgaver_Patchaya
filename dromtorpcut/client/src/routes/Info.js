import "../CSS/Home.css";
import React, { useRef } from "react";
import Header from "../components/Header";
import ContactUs from "../components/Contact";
import { useNavigate } from "react-router-dom";
import HorizontalLabelPositionBelowStepper from "../components/Progress";

export default function Info() {
  const nav = useNavigate();
  const form = useRef();

  return (
    <div className="main-content">
      <Header />
      <HorizontalLabelPositionBelowStepper pageStep={1} />
      <ContactUs />
    </div>
  );
}
