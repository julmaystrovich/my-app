import React, { useState, useEffect } from "react";
import Link from "../../components/link";
import { StyledMenu } from "./styled-menu";

const Menu = ({ t, template, ...rest }) => {
  const [windowCheck, setWindowCheck] = useState("undefined");
  useEffect(() => {
    if (typeof window !== windowCheck) {
      setWindowCheck(window.innerWidth <= 1190);
    }
  }, [windowCheck]);

  return (
    <StyledMenu
      template={template}
      className="navbar"
    >
      <a href="/">
        <div className="site-logo"></div>
      </a>
      <nav>
        <ul className="header-menu">
          <li className="menu-item">
            <a href="#top">
              <p className="">Главная</p>
            </a>
          </li>
          <li className="menu-item">
            <a href="#about">
              <p className="">Обо мне</p>
            </a>
          </li>
          <li className="menu-item">
            <a href="#samples">
              <p className="">Мои работы</p>
            </a>
          </li>
          <li className="menu-item">
            <a href="#faq">
              <p className="">FAQ</p>
            </a>
          </li>
          <li className="menu-item">
            <a href="#review">
              <p className="">отзывы</p>
            </a>
          </li>
        </ul>
      </nav>
      <Link className="phone" href="tel:+79050122888">+7 (905) 012-28-88</Link>
    </StyledMenu>
  );
};

export default Menu;
