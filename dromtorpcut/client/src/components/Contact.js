import React, { useRef } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import axios from "axios";
import "../CSS/Contact.css";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const nav = useNavigate();
  const form = useRef();
  const checkInput = () => {
    if (
      form.current[1].value == "" ||
      form.current[2].value == "" ||
      form.current[3].value == ""
    ) {
      alert("Fill in your informations");
    } else {
      checkDate();
    }
  };
  const registerOrder = () => {
    const data = {
      cut: form.current[0].value,
      name: form.current[1].value,
      email: form.current[2].value,
      date: form.current[3].value,
    };
    axios.post("http://armadillo.pink:25584/registerOrder", {
      cut: data.cut,
      name: data.name,
      email: data.email,
      date: data.date,
    });
  };
  const checkDate = () => {
    const date = new Date(form.current[3].value);
    const dayOfWeek = date.getUTCDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      alert("The selected date is in the past. Please choose a future date.");
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
      alert(
        "The selected date is a Saturday or Sunday. Please choose a weekday."
      );
    } else {
      axios
        .get(
          `http://armadillo.pink:25584/checkDateAvailability/${date.toISOString()}`
        )
        .then((res) => {
          if (res.data === "Date is not available") {
            alert(
              "The selected date is not available. Please choose another date."
            );
          } else {
            registerOrder();
            // sendEmail();
          }
        });
    }
  };
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_qek1hs9",
        "template_cg6my8l",
        form.current,
        "2G7H1tlw4bN8adSR-"
      )
      .then(
        (result) => {
          nav("/step3");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form}>
      <label>Cut</label>
      <select id="input-cut" name="cut">
        <option value="Skin fade">Skin Fade</option>
        <option value="Men's Haircut">Men's Haircut</option>
        <option value="Combo Deluxe">Combo Deluxe</option>
        <option value="Dameklipp">Dameklipp</option>
        <option value="Beard Trimming">Beard Trimming</option>
      </select>
      <label>Name</label>
      <input id="input-name" type="text" name="name" />
      <label>Email</label>
      <input id="input-email" type="email" name="email" />
      <label>Date</label>
      <input id="input-date" type="date" name="date"></input>
      <div className="btn-container-contact">
        <button onClick={() => nav("/step1")}>Back</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            checkInput();
          }}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
