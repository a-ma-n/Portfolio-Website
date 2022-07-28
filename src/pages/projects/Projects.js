import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import PublicationData from "../../shared/opensource/publications.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="skills-header" style={{ color: theme.text }}>
              Projects
            </h1>
          </Fade>
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div
                className="projects-heading-text-div"
                style={{ display: "grid", placeItems: "center" }}
              >
                {/* <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1> */}
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo, idx) => {
            return <GithubRepoCard repo={repo} theme={theme} key={idx} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile + "?tab=repositories"}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}

        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
