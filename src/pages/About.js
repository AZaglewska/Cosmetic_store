import React from "react";
import navbarImage from "../assets/navbarImages/navbarImage1.jpg";
import DiscountedProductsCarousel from "../components/DiscountedProductsCarousel/DiscountedProductsCarousel";
import GoogleMap from "../components/GoogleMap";
import offerIcon from "../assets/icons/upselling.svg";
import { routes } from "../routes/index";
import {
  StyledWrapper,
  AboutWrapper,
  AboutContent,
  AboutOfferLink,
  AboutOfferIcon,
} from "./stylesPages/AboutStyles";

const About = () => {
  return (
    <>
      <StyledWrapper navbarImage={navbarImage}></StyledWrapper>
      <AboutWrapper>
        <AboutContent>
          <h2>About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptate dolorem at tenetur accusantium voluptatem reprehenderit
            eaque, sunt laudantium voluptatum, maxime unde expedita tempore sed
            in eos dignissimos reiciendis consectetur magni aut iusto totam.
            Omnis, eligendi, sapiente optio hic dicta iure saepe magni id
            consectetur vero labore nobis ad illo?
          </p>
          <AboutOfferLink to={routes.products}>
            <AboutOfferIcon src={offerIcon} />
            Check Our Offer
          </AboutOfferLink>
        </AboutContent>
        <GoogleMap />
      </AboutWrapper>

      <DiscountedProductsCarousel />
    </>
  );
};

export default About;
