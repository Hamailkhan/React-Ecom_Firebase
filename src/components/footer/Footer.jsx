import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <figure className="w-64">
          <img src="../public/logo-black-trans.png" alt="logo" />
        </figure>
        <p className="text-2xl">Shop your dream here.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <NavLink className="link link-hover">Branding</NavLink>
        <NavLink className="link link-hover">Design</NavLink>
        <NavLink className="link link-hover">Marketing</NavLink>
        <NavLink className="link link-hover">Advertisement</NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <NavLink className="link link-hover">About us</NavLink>
        <NavLink className="link link-hover">Contact</NavLink>
        <NavLink className="link link-hover">Jobs</NavLink>
        <NavLink className="link link-hover">Press kit</NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <NavLink className="link link-hover">Terms of use</NavLink>
        <NavLink className="link link-hover">Privacy policy</NavLink>
        <NavLink className="link link-hover">Cookie policy</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
