import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { socialprofiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
      {socialprofiles.github && (
          <li>
            <a href={socialprofiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
                {socialprofiles.youtube && (
          <li>
            <a href={socialprofiles.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
                {socialprofiles.facebook && (
          <li>
            <a href={socialprofiles.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofiles.instragram && (
          <li>
            <a href={socialprofiles.instragram}>
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
