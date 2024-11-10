"use client";

import React, { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    advice: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Form submitted", formData);
  };

  return (
    <div className={styles.background}>
      <div className={styles.contactContainer}>
        <div className={styles.contactText}>
          <h2>Vamos Conversar</h2>
          <p>
            Tem uma grande ideia ou precisa desenvolver sua marca? Estamos aqui
            para ajudar! Entre em contato conosco, adoraríamos ouvir mais sobre
            seu projeto e descobrir como podemos colaborar para trazer suas
            ideias à vida.
          </p>
          <h3>Email</h3>
          <p>leeds@gmail.com</p>
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="advice"
            value={formData.advice}
            onChange={handleChange}
            required
          >
            <option value="">
              Qual tipo de orientação você está buscando?
            </option>
            <option value="Project">Projeto</option>
            <option value="Consulting">Consultas</option>
            <option value="Other">Outro</option>
          </select>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o orçamento do projeto</option>
            <option value="low">Baixo</option>
            <option value="medium">Médio</option>
            <option value="high">Alto</option>
          </select>
          <textarea
            name="message"
            placeholder="Mensagem..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
