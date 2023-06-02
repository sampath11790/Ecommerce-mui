import React from "react";
import cls from "./Home.module.css";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <>
      <div className={cls.aboutpage}>
        <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-04May2023.jpg" />
      </div>
      <div className={cls.aboutpage}>
        <img
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Beauty_Desktop-2-30May2023.jpg"
          id="hero_banner_image_1"
          alt=""
        />
      </div>
      <div className={cls.aboutpage}>
        <img
          class="MuiCardMedia-root jss11996 MuiCardMedia-media MuiCardMedia-img"
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-shoes-9modularblock-A-26Apr2023.jpg"
        />
      </div>
      <div className={cls.aboutpage}>
        <img
          class="MuiCardMedia-root jss877 MuiCardMedia-media MuiCardMedia-img"
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-4modblock-oneBythree-A-Kids-21Mar2023.jpg"
        />
      </div>
      <div className={cls.aboutpage}>
        <img
          class="MuiCardMedia-root jss1425 MuiCardMedia-media MuiCardMedia-img"
          src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-shoes&amp;bags-13modblock-oneBythree-A-26Apr23.jpg"
        />
      </div>
    </>
  );
};

export default Home;
