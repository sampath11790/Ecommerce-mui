import React from "react";
import cls from "./About.module.css";
import { Box } from "@mui/material";
const About = () => {
  return (
    <>
      <p>About page</p>

      <div className={cls.aboutpage}>
        <img srcset="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.ssl.cf3.rackcdn.com/LS-Fest/mob-lifestyle-app-header-07Feb2020.jpg" />
      </div>
    </>
  );
};

export default About;
