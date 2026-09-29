"use client";

import { useState } from "react";

const whatsappLink = "https://wa.me/2348066834640";

const services = [
  {
    title: "Dental Equipment Supply",
    text: "Reliable dental equipment solutions for modern dental practices.",
    icon: "⚙",
  },
  {
    title: "Equipment Repair",
    text: "Professional technical support for faulty and malfunctioning dental equipment.",
    icon: "🔧",
  },
  {
    title: "Dental Chair Repair & Installation",
    text: "Repair, installation and setup support for dental chairs and related equipment.",
    icon: "🦷",
  },
  {
    title: "Equipment Maintenance",
    text: "Maintenance solutions designed to help keep your equipment functional.",
    icon: "✓",
  },
  {
    title: "Technical Support",
    text: "Practical assistance for dental equipment and technical issues.",
    icon: "◉",
  },
  {
    title: "Equipment Installation",
    text: "Professional installation support for dental equipment and systems.",
    icon: "▣",
  },
];

const products = [
  "Dental Chairs",
  "Dental Units",
  "Dental Compressors",
  "Suction Systems",
  "Autoclaves",
  "Dental X-Ray Equipment",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo">
            <span className="logo-mark">P</span>
            <span>
              Primestan
              <small>Ventures World</small>
            </span>
          </a>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <a href={whatsappLink} className="nav-button">
            Get a Quote
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">DENTAL ENGINEERING SOLUTIONS</p>

            <h1>
              Advancing <span>Dental</span> Solutions
            </h1>

            <p className="hero-text">
              Reliable dental equipment, repairs, installation and maintenance
              solutions designed to support modern dental practices.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="primary-button">
                Explore Our Services →
              </a>

              <a href={whatsappLink} className="secondary-button">
                Talk to Us
              </a>
            </div>

            <div className="hero-trust">
              <span>✓ Equipment Solutions</span>
              <span>✓ Technical Support</span>
              <span>✓ Maintenance</span>
            </div>
          </div>

          <div className="hero-image image-placeholder">
            <div className="placeholder-content">
              <span>+</span>
              <p>Dental Equipment Image</p>
              <small>Add your real Primestan image here</small>
            </div>
          </div>
        </div>
      </section>

      <section className="intro">
       
