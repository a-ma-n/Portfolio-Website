import React, { Component } from "react";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import TopButton from "../../components/topButton/TopButton";
import { contactPageData, greeting } from "../../portfolio.js";
import "./ContactComponent.css";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <div className="basic-contact">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="skills-header" style={{ color: theme.text }}>
              Contact Me
            </h1>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt="profile"
                />
              </div>
              <div
                className="contact-heading-text-div"
                style={{ display: "grid", margin: "auto" }}
              >
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
