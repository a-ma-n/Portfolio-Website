import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <div className="basic-education">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="skills-header" style={{ color: theme.text }}>
              Education
            </h1>
          </Fade>
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div
                className="heading-text-div"
                style={{ display: "grid", margin: "auto" }}
              >
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Platforms To Find Me 
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
        </div>
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
