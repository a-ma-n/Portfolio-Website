import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Contact from "../contact/ContactComponent";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Education theme={this.props.theme} />
        <Experience theme={this.props.theme} />
        <Projects theme={this.props.theme} />
        <Contact theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
