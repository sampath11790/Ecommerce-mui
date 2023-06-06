import React from "react";
import cls from "./About.module.css";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <div className={cls.aboutpage_cont}>
      <div className={cls.aboutpage_intro}>
        <img
          src="https://th.bing.com/th/id/R.1aa9b7421891f6297f3f1a3d28403489?rik=j%2b12Y58K70QszQ&riu=http%3a%2f%2fwww.designhill.com%2fdesign-blog%2fwp-content%2fuploads%2f2017%2f07%2ffashion-banner.jpg&ehk=gEzKGwAvtg5DlCWxdoPBLZT5ho1KkyEr3ipjW7Gnhxw%3d&risl=&pid=ImgRaw&r=0"
          alt="postimage"
        ></img>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontFamily: "monospace", fontSize: 30, mt: 5, mb: 5 }}
        >
          We connect people and build communities to create economic opportunity
          for all.
        </Typography>
        {/* <h3>
         
         
        </h3> */}
        <p>
          At FashionFusion, we create pathways to connect millions of sellers
          and buyers in more than 190 markets around the world. Our technology
          empowers our customers, providing everyone the opportunity to grow and
          thrive — no matter who they are or where they are in the world. And
          the ripple effect of our work creates waves of change for our
          customers, our company, our communities and our planet.
        </p>
      </div>
      <div className={cls.aboutpage_intro_2_cont}>
        <div className={cls.aboutpage_intro_2}>
          <img src="https://static.ebayinc.com/static/assets/Uploads/Content/SB/_resampled/FillWzc1MCw0MjJd/our-company-buyer-photo.jpg"></img>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "monospace", fontSize: 20, mt: 5, mb: 5 }}
          >
            Explore vast inventory & unique selection
          </Typography>

          <p>
            Buyers who shop on the ebay.com marketplace and its localized
            counterparts, as well as the eBay mobile apps, enjoy a highly
            personalized experience with an unparalleled selection at great
            value.
          </p>
        </div>
        <div className={cls.aboutpage_intro_2}>
          <img
            src="https://static.ebayinc.com/static/assets/Uploads/Content/SB/_resampled/FillWzczNiw0MTRd/Shine2019-ElijahMcCloskey-HighRes-162.jpg"
            alt="postimage"
          ></img>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "monospace", fontSize: 20, mt: 5, mb: 5 }}
          >
            Reach new customers & grow your business
          </Typography>

          <p>
            We offer sellers the ability to grow a business with little barrier
            to entry regardless of size, background or geographic location. We
            never compete with our sellers. We win when our sellers succeed.
          </p>
        </div>
      </div>
      <div className={cls.tech_cont}>
        <div className={cls.tech1}>
          <h2>Technology</h2>
          <p>
            FashionFusion creates inspiring ecommerce experiences for our
            buyers, sellers and developers. Embracing innovation has been a
            cornerstone of our growth and customer loyalty for more than 25
            years –&nbsp;encompassing technologies such as AI, computer vision,
            natural language processing and machine translation.
          </p>
        </div>
        <div className={cls.tech2}>
          <h2>Impact</h2>
          <p>
            Every day, people build businesses on eBay. Nonprofit organizations
            raise vital funds. Entrepreneurs gain new skills and access to new
            markets where they can turn their dreams and ideas into business
            success.
          </p>
        </div>
      </div>
      <div className={cls.Awards}>
        <h2>Awards &amp; Recognition</h2>

        <div>
          <p>
            From creating a workplace environment where employees can be their
            authentic selves, to being a responsible business with a commitment
            to the community – we're breaking down barriers and helping to
            foster opportunity for all.
          </p>
        </div>
      </div>
      <div className={cls.aboutpage}>
        <img srcset="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.ssl.cf3.rackcdn.com/LS-Fest/mob-lifestyle-app-header-07Feb2020.jpg" />
      </div>
    </div>
  );
};

export default About;
