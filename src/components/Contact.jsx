import React, { useState } from "react";
import BG2 from "./bg/BG2";
import "./styles/contact.css";
import emailjs from "emailjs-com";
// import { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, reset, handleSubmit } = useForm();

  const submit = (formdata) => {
    emailjs
      .sendForm(
        "service_miumriz",
        "template_15zl6es",
        "#form",
        "tAlX9bQ-93wCm0Opg"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("success!");
        },
        (error) => {
          console.log(error.text);
          alert("Failure...", error);
        }
      );
    reset();
  };

  return (
    <>
      <BG2 />
      <NavLink className="nav_home" to="/">
        <i className="bx bx-home portfolio-container__icon"></i>
      </NavLink>
      <div className="contact">
        <h1 className="contact__title">CONTACT ME</h1>
        <form
          id="form"
          onSubmit={handleSubmit(submit)}
          className="contact__form"
        >
          <label htmlFor="first_name" className="label">
            Nombre
          </label>
          <input
            {...register("first_name")}
            type="first_name"
            id="first_name"
            className="input"
            required
          />
          <label htmlFor="last_name" className="label">
            Apellido
          </label>
          <input
            {...register("last_name")}
            type="last_name"
            id="last_name"
            className="input"
            required
          />
          <label htmlFor="email" className="label">
            Correo
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="input"
            required
          />
          <label htmlFor="subject" className="label">
            subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            className="input"
            required
          />
          <label htmlFor="body" className="label">
            body
          </label>
          <input
            {...register("body")}
            type="text"
            id="body"
            className="input input--body"
            required
          />
          <button className="btn btn-create">Submit </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
