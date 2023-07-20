import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/93317898"}
          alt="Founder"
        />

        <h2>@gitUatu</h2>
        <p>The greater the difficulty, the more the glory in surmounting it.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="/" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="/" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
